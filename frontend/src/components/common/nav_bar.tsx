import React from 'react';
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}


const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Medical Consultation',
        subLabel: 'Expert medical advice and consultation',
        href: '/services/consultation',
      },
      {
        label: 'Health Checkups',
        subLabel: 'Comprehensive health screening',
        href: '/services/checkups',
      },
      {
        label: 'Emergency Care',
        subLabel: '24/7 emergency medical services',
        href: '/services/emergency',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];