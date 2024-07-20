<template>
    <WrapperFull class="border-b">
        <nav class="container absolute inset-0 mx-auto px-4">
            <section class="size-full flex items-center justify-between">
                <NuxtLink
                    to="/"
                    class="text-heading text-2xl text-center font-bold"
                >
                    Zeph UI
                </NuxtLink>
                <div class="flex items-center gap-x-2.5">
                    <div class="flex gap-2">
                        <NuxtLink
                            v-for="({ title, path }, index) in authentication"
                            :to="path"
                            :key="index"
                            class="text-heading text-sm font-medium last:max-md:hidden last:bg-secondary rounded-full border border-subheading p-2"
                            >{{ title }}</NuxtLink
                        >
                    </div>
                    <button
                        class="grid place-items-center p-1 rounded-full hover:bg-gray-200 md:hidden"
                        @click="toggleMenu()"
                    >
                        <Icon
                            :name="menu ? 'mdi:menu' : 'mdi:close'"
                            size="22"
                        />
                    </button>
                </div>
            </section>
            <ul
                class="hidden md:grid grid-flow-col place-items-center mx-auto w-fit gap-5 absolute inset-0"
            >
                <NuxtLink
                    v-for="({ title, path, isActive }, index) in navigation"
                    :key="index"
                    class="w-16 text-center text-subheading hover:text-heading font-medium tracking-wide hover:font-semibold"
                    :class="{ 'text-heading': isActive }"
                    :to="path"
                >
                    {{ title }}
                </NuxtLink>
            </ul>
            <ul
                class="absolute inset-x-0 w-full h-[calc(100svh-5rem)] bg-white flex flex-col border-t md:hidden"
                :class="{ hidden: menu }"
            >
                <li
                    v-for="(nav, index) in navigation"
                    :key="index"
                    class="relative flex flex-col items-center px-4 text-subheading w-full font-medium tracking-wide"
                    :class="{ 'text-heading': nav.isActive }"
                >
                    <NuxtLink
                        class="flex w-full items-center justify-between py-2 hover:font-semibold hover:text-heading"
                        :class="{
                            'text-heading font-semibold': nav.submenuOpened,
                        }"
                        :to="nav.submenu ? '' : nav.path"
                        @click="nav.submenu ? submenuToggle(nav) : null"
                    >
                        <div
                            class="grid grid-flow-col place-items-center gap-2"
                        >
                            <Icon :name="`mdi:${nav.icon}`" size="22" />
                            <span>{{ nav.title }}</span>
                        </div>
                        <Icon
                            v-if="nav.submenu"
                            :name="
                                nav.submenuOpened
                                    ? 'mdi:chevron-down'
                                    : 'mdi:chevron-right'
                            "
                            size="20"
                        />
                    </NuxtLink>
                    <NuxtLink
                        v-show="nav.submenuOpened"
                        v-for="({ title, path }, index) in nav.submenu"
                        :key="index"
                        class="grid place-items-start w-[calc(100%-1.25rem)] border-l-2 px-5 text-caption hover:border-heading hover:text-heading transition duration-300 ease-in-out"
                        :to="path"
                    >
                        <span>{{ title }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </WrapperFull>
</template>
<script setup lang="ts">
type BaseNavigation = {
    title: string;
    path: string;
};

type NavigationObject = BaseNavigation & {
    icon?: string;
    isActive?: boolean;
    submenu?: BaseNavigation[];
    submenuOpened?: boolean;
};

const route = useRoute();
const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
const submenuToggle = (navItem: NavigationObject) =>
    (navItem.submenuOpened = !navItem.submenuOpened);

const navigation = ref<NavigationObject[]>([
    {
        title: "Home",
        path: "/",
        icon: "home",
        isActive: true,
    },
    {
        title: "Products",
        path: "/products",
        icon: "box-variant-closed",
        isActive: false,
        submenu: [
            {
                title: "Front End Development",
                path: "/products/frontend",
            },
            {
                title: "Back End Development",
                path: "/products/backend",
            },
            {
                title: "Full Stack Development",
                path: "/products/fullstack",
            },
            {
                title: "Search Engine Optimization",
                path: "/products/seo",
            },
        ],
        submenuOpened: false,
    },
    {
        title: "Pricing",
        path: "/pricing",
        icon: "cash",
        isActive: false,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: "contact",
        isActive: false,
    },
]);

const authentication = [
    {
        title: "Sign in",
        path: "/login",
    },
    {
        title: "Sign up ➜",
        path: "/register",
    },
];

const isActive = (path: string) => {
    return route.path === path;
};

watch(
    () => route.path,
    () => {
        navigation.value.forEach((navItem: NavigationObject) => {
            navItem.isActive = isActive(navItem.path);
        });
    },
    { immediate: true },
);
</script>
