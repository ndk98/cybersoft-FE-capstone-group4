"use client";

export default function GetUserFromCookie() {
    if (typeof document !== "undefined") {
        const user = document.cookie
            .split("; ")
            .find((row) => row.startsWith("admin_user="));
        if (user) {
            return JSON.parse(user.split("=")[1]);
        }
    }

    return null;
}
