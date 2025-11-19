"use client";
import AuthContext from "@/context/AuthContext";
import React from "react";


const AuthProvider = ({ children }) => {
    const Info = { name: "maruf" };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
