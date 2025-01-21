"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
    login: (user: object, adminToken: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    const login = (user: object, adminToken: string) => {
        document.cookie = `admin_token=${adminToken}; path=/;`;
        document.cookie = `admin_user=${JSON.stringify(user)}; path=/;`;
    };

    const logout = () => {
        document.cookie =
            "admin_token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        document.cookie =
            "admin_user" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        router.push("/auth/login");
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
