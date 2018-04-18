import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';

export const routes = [
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
];
