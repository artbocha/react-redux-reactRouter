import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';

export const routes = [
  {
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
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
  }
];
