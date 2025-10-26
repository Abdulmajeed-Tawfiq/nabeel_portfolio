import { ComponentType } from "react";

export interface Section {
  component: ComponentType;
  name: string;
  id: string;
}

export interface NavItem {
  name: string;
  index: number;
}

// Note: Components are imported in App.tsx, so we export types and data without components
export const navItems: NavItem[] = [
  { name: "Home", index: 0 },
  { name: "About", index: 1 },
  { name: "Portfolio", index: 2 },
  { name: "Contact", index: 3 },
];
