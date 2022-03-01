// Sidebar route metadata
export interface RouteInfo {
    path: string;
    title: string;
    class: string;
    icon: string;
    submenu : RouteInfo[];
}
