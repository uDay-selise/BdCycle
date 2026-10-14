export type Route = "/" | "/events" | "/about" | "/join";

export const NAV_ITEMS: { label: string; path: Route }[] = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
  { label: "Join/Contact", path: "/join" },
];