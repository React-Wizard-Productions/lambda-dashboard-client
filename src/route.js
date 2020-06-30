import LoginPage from './components/mdr-pro/pages/LoginPage';
import RegisterPage from './components/mdr-pro/pages/RegisterPage';

export default [
  {
    path: '/login',
    name: 'Login Page',
    component: LoginPage,
    layout: '/auth',
  },
  {
    path: '/register',
    name: 'Register Page',
    component: RegisterPage,
    layout: '/auth',
  },
];
