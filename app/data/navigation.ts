export interface NavItem {
  name: string;
  href: string;
  isFoundation?: boolean; // Flag for foundation vs sequence grouping
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { name: 'Home', href: '/', isFoundation: true },
  { name: 'Product Lab', href: '/products', isFoundation: true },
  { name: 'Occasions', href: '/occasions', isFoundation: true },
  { name: 'How I Can Help', href: '/how-i-can-help', isFoundation: true },
];

export const footerNavigation: NavItem[] = [];
