import Home from '@views/HomePage.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@views/AboutPage.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@views/NotFoundPage.vue'),
  },
];
