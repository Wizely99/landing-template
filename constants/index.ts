// NAVIGATION
export type NavLink = {
  href: string;
  key: string;
  label: string;
};
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/working', key: 'how_quenchx_work', label: 'How QuenchX Work?' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pricing', key: 'pricing ', label: 'Pricing ' },
  { href: '/contacts', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Analytics and Reporting',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Make informed business decisions with our robust analytics and reporting tools. Gain insights into top-selling drinks, peak hours, and customer behavior to optimize your menu and maximize profitability.'
  },
  {
    title: 'Online Ordering and Delivery Integration',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      'Stay ahead of the curve by offering online ordering and delivery services. Seamlessly integrate our system with your website or app, providing customers with a convenient way to enjoy their favorite drinks from the comfort of their homes.'
  },
  {
    title: 'Inventory Management',
    icon: '/tech.svg',
    variant: 'green',
    description:
      '  Keep track of your stock with ease, so you never have to say \" I\'m out \" to your special  customers.Set automatic low - stock alerts, monitor expiration dates, and optimize your supply chain effortlessly.'
  },
  {
    title: 'Intuitive Point of Sale (POS) System',
    icon: '/location.svg',
    variant: 'orange',
    description:
      
      'Our user-friendly POS system makes processing drink orders a breeze. With a simple and intuitive interface, your staff can efficiently manage orders, customize drinks, and process transactions swiftly.'
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About QuenchX',
      'Press Releases',
      'How it works?',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '+255 620 156 515' },
    { label: 'Email support', value: 'support@quenchx.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
  ],
};

export const CAROUSAL_PICTURES = [{
  key:'dashboard-1',
  link:'dashboard1.png',
},{
  key:'dashboard-1',
  link:'dashboard2.png',
},{
  key:'dashboard-2',
  link:'qx-stock-list.png',
},{
  key:'dashboard-2',
  link:'qx-sales-list.png',
},{
  key:'dashboard-2',
  link:'qx-sale-detail.png',
},{
  key:'dashboard-2',
  link:'qx-expense-list.png',
},{
  key:'dashboard-2',
  link:'qx-sale-detail.png',
},{
  key:'dashboard-2',
  link:'qx-sale-detail.png',
},{
  key:'dashboard-2',
  link:'qx-sale-detail.png',
},{
  key:'dashboard-2',
  link:'qx-sale-detail.png',
},{
  key:'dashboard-2',
  link:'qx-generate-report.png',
}]
