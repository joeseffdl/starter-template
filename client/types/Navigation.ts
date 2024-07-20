export type BaseNavigation = {
    title: string;
    path: string;
};

export type NavigationObject = BaseNavigation & {
    icon?: string;
    isActive?: boolean;
    submenu?: BaseNavigation[];
    submenuOpened?: boolean;
};
