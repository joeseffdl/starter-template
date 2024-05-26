export default defineNuxtRouteMiddleware((to) => {
    const currentRoute = to?.name?.toString().toLowerCase() ?? "";
    const allowedRoutes = [
        "index",
        "auth-login",
        "auth-register",
        "app-products",
        "app-pricing",
        "app-contact",
        "dashboard",
    ];

    if (!allowedRoutes.includes(currentRoute)) return navigateTo("/");
});
