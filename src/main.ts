import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Theme, ThemeServiceInit, devuiDarkTheme } from 'ng-devui/theme';
import { AppModule } from './app/app.module';

import { deepTheme, infinityTheme, provenceTheme, sweetTheme } from 'ng-devui/theme-collection';

const customTheme = new Theme({
  id: `customize-theme`,
  name: 'custom',
  cnName: '自定义主题',
  data: {},
  isDark: true,
});

ThemeServiceInit({
  infinityTheme,
  sweetTheme,
  provenceTheme,
  deepTheme,
  devuiDarkTheme,
  customTheme,
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
