import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BookingsystemModule } from './app/bookingsystem/bookingsystem.module';
import { environment } from './environments/environment';
import { AppModule } from './app/showcase/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BookingsystemModule )
  .catch(err => console.log(err));
