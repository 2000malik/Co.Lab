import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const baseUrl = publicRuntimeConfig.BASE_URL;
export const project = [
  {
    logo: '/assets/images/Shago-Alerzo_Logo.jpg',
    link: 'https://www.shagopayments.com/',
    name: 'shago payments',
    industry: 'Fintech',
    solutions: 'VAS',
  },
  {
    logo: '/assets/images/micropay-logo.jpg',
    link: 'https://micropay.africa/',
    name: 'Micropay Africa',
    industry: 'Fintech',
    solutions: 'VAS',
  },
  {
    logo: '/assets/images/veedez-logo.jpg',
    link: 'https://b2b.stg.veedez.com/',
    name: 'Veedez',
    industry: 'I.T',
    solutions: 'Inventory management app for small business owners, VAS',
  },
  {
    logo: '/assets/images/hadada-logo.jpg',
    link: 'https://hadada.co/',
    name: 'Hadada',
    industry: 'I.T',
    solutions: 'OTP Widget',
  },
];

export const usersTableHead = ['id', 'name', 'username', 'email', 'phone'];
