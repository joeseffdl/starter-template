export default defineNuxtRouteMiddleware((to) => {
    const currentRoute = to?.name?.toString().toLowerCase() ?? "";
    const authorizedUser = false;
    const allowedRoutes = [
        "index",
        "login",
        "register",
        "products",
        "pricing",
        "contact",
    ];

    if (!authorizedUser) {
        if (
            !allowedRoutes.includes(currentRoute) &&
            currentRoute !== "dashboard-module"
        ) {
            return navigateTo("/");
        } else if (currentRoute === "dashboard-module") {
            return navigateTo("/login");
        }
    } else if (authorizedUser && currentRoute === "login") {
        return navigateTo("/dashboard");
    }
});
