"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useAuth } from "../AuthContext";

export default function AuthLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.user, data.token);
                router.push("/admin");
            } else {
                setError(data.message);
            }
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-96">
                <h1 className="text-5xl font-bold text-center mb-10">Airbnb</h1>
                <div className="text-xl font-semibold text-center">
                    Đăng nhập quản trị viên
                </div>
                {error && (
                    <p className="mt-8 text-red-500 font-semibold">{error}</p>
                )}
                <form onSubmit={handleLogin}>
                    <div className="mt-4">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full p-2 bg-secondary text-white rounded"
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>
                            Nếu bạn chưa có tài khoản?{" "}
                            <Link href="/auth/register">Đăng ký tại đây.</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
