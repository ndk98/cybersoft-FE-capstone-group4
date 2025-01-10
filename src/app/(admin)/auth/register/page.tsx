"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const role = "ADMIN";

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phone,
                    birthday,
                    gender,
                    role,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message);
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
                    Đăng ký quản trị viên
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <form onSubmit={handleRegister}>
                    <div className="mt-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tên"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="date"
                            name="birthday"
                            placeholder="Ngày sinh"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <select
                            name="gender"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Lựa chọn</option>
                            <option value="0">Nam</option>
                            <option value="1">Nữ</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full p-2 bg-secondary text-white rounded"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className="mt-4">
                        <p>
                            Nếu bạn đã có tài khoản?{" "}
                            <Link href="/auth/login">Đăng nhập tại đây.</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
