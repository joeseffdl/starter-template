export default defineNuxtRouteMiddleware((to) => {
    const currentRoute = to?.name?.toString().toLowerCase() ?? "";
    const authorizedUser = false;

    const allowedRoutes = [
        "index",
        "auth-login",
        "auth-register",
        "products",
        "pricing",
        "contact",
    ];

    !allowedRoutes.includes(currentRoute)
        ? navigateTo("/")
        : authorizedUser && currentRoute === "login"
          ? navigateTo("/dashboard")
          : null;
});
