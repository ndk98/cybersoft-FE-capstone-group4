import type { Metadata } from "next";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
    title: "Airbnb Admin",
    description: "Generated by create next app",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />

            <Sidebar />

            <div className="p-4 sm:ml-64">
                <div className="p-4 mt-14">{children}</div>
            </div>

            <Footer />
        </>
    );
}
