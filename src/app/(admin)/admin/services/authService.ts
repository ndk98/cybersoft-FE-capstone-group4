export async function getAdminUser() {
    try {
        const res = await fetch("/api/verify", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (res.status === 401) {
            window.location.href = "/admin";
            return null;
        }

        const data = await res.json();
        return data.user;
    } catch (error) {
        console.error("Failed to fetch admin user:", error);
        return null;
    }
}
