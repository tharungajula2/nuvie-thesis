export interface NavItem {
  name: string;
  href: string;
  isFoundation?: boolean; // Flag for foundation vs sequence grouping
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { name: 'Home', href: '/', isFoundation: true },
  { name: 'Products', href: '/products', isFoundation: true },
  { name: 'Occasions', href: '/occasions', isFoundation: true },
  { name: '01 Strategy', href: '/strategy' },
  { name: '02 Economics', href: '/economics' },
  { name: '03 Channels', href: '/channels' },
  { name: '04 Growth', href: '/growth' },
  { name: '05 Packaging', href: '/labs/packaging' },
  { name: '06 Flavor', href: '/labs/flavor' },
  { name: '07 Manufacturing', href: '/labs/manufacturing' },
  { name: '08 R&D', href: '/labs/r-and-d' },
  { name: '09 Expansion', href: '/labs/expansion' },
];

export const footerNavigation: NavItem[] = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Contact', href: '/contact' },
  { name: 'Operator Guide', href: '/guide' },
];
