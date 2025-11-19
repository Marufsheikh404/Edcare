"use client";
import AuthContext from "@/context/AuthContext";
import React, { useState } from "react";


const AuthProvider = ({ children }) => {
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const Info = {

    };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
