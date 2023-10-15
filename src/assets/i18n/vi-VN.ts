import authGuard from './vi-VN/auth-guard';
import footer from './vi-VN/footer';
import header from './vi-VN/header';
import login from './vi-VN/login';
import pages from './vi-VN/page';
import personalize from './vi-VN/personalize';
import register from './vi-VN/register';
import start from './vi-VN/start';

export default {
  ...pages,
  ...start,
  ...personalize,
  ...authGuard,
  ...footer,
  ...header,
  ...login,
  ...register,
};
