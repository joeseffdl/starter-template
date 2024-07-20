export default defineNuxtRouteMiddleware((to) => {
    const isAuthenticated = true;
    const currentRoute = to.name?.toString().toLowerCase() ?? "";

    const publicRoutes = [
        "index",
        "login",
        "register",
        "products",
        "pricing",
        "contact",
    ];

    const isPublicRoute = publicRoutes.includes(currentRoute);

    if (!isAuthenticated && !isPublicRoute) {
        return navigateTo("/login");
    } else if (
        isAuthenticated &&
        (currentRoute === "login" || currentRoute === "register")
    ) {
        return navigateTo("/dashboard");
    }
    return;
});
