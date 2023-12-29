import { LayoutDashboard, LucideIcon, Receipt } from 'lucide-react';

export type NavItem = {
  title: string;
  icon: LucideIcon;
  path: string;
};

export const navItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    title: 'Faturas',
    icon: Receipt,
    path: '/electricity-bills',
  },
] as NavItem[];
