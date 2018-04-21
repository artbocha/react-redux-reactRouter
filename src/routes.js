import News from './pages/news';
import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    isNavBar: true,
    path: '/news',
    name: 'News',
    component: News
  },
  {
    isNavBar: true,
    path: '/profile',
    name: 'Profile',
    component: Profile,
    isPrivate: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];
