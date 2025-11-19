"use client";
import AuthContext from "@/context/AuthContext";
import React, { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch('/category.json');
                const category = await res.json();
                setCategories(category);
            } catch (error) {
                setError(error.message)
            }
        }
        fetchCategory();
    }, []);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch('/course.json');
                const course = await res.json();
                setCourses(course)
            } catch (error) {
                setError(error.message)
            }
        };
        fetchCourse();
    }, [])
    const Info = {
        categories,
        courses
    };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
