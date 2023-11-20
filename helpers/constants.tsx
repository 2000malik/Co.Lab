import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const baseUrl = publicRuntimeConfig.BASE_URL;
export const project = [
  {
    logo: 'url(/assets/images/shago.webp)',
    link: 'https://www.shagopayments.com',
    name: 'shago payments',
    industry: 'Fintech',
    solutions: 'VAS',
  },
  {
    logo: 'url(/assets/images/hadada-logo.jpg)',
    // link: 'https://hadada.co/',
    link: 'https://www.linkedin.com/company/hadada-financial/?originalSubdomain=ng',
    name: 'Hadada',
    industry: 'I.T',
    solutions: 'OTP Widget',
  },
  {
    logo: 'url(/assets/images/micropay.webp)',
    link: 'https://micropay.africa',
    name: 'Micropay Africa',
    industry: 'Fintech',
    solutions: 'VAS',
  },
  {
    logo: 'url(/assets/images/veedez.webp)',
    link: 'https://b2b.veedez.com',
    name: 'Veedez',
    industry: 'I.T',
    solutions: 'Inventory management app for small business owners, VAS',
  },
  {
    logo: 'url(/assets/images/cma.webp)',
    link: 'https://2000malik.github.io/couse-mgt-app',
    name: 'course management App',
    industry: 'Personal Project',
    solutions: 'I.T',
  },
  {
    logo: 'url(/assets/images/veedez-admin.webp)',
    link: 'https://admin.veedez.com',
    name: 'Veedez-web-app',
    industry: 'I.T',
    solutions: 'admin dashboard for managing and providing resolutions for the business',
  },
];

export const usersTableHead = ['id', 'name', 'username', 'email', 'phone'];
