export interface DashboardCardsConfig {
  link: string;
  title: string;
  image: string;
  theme?: 'dark' | 'light';
}

export const DashboardCardsConfig: DashboardCardsConfig[] = [
  {
    link: '/parallax-scroll',
    title: 'Parallax scroll',
    image: 'assets/images/dashboard/parallax-scrolling.gif',
  },
  {
    link: '/custom-cursor',
    title: 'Custom cursor',
    image: './assets/images/dashboard/custom-cursor.gif',
    theme: 'dark',
  },
  {
    link: '/dynamic-svg-stroke',
    title: 'Dynamic SVG stroke',
    image: './assets/images/dashboard/dynamic-svg-stroke.gif',
    theme: 'dark',
  },
];
