export default defineNuxtRouteMiddleware((to) => {
    const currentRoute = to?.name?.toString().toLowerCase() ?? "";
    const authorizedUser = false;
    if (!authorizedUser && currentRoute === "dashboard") {
        return navigateTo("/login");
    }
});
