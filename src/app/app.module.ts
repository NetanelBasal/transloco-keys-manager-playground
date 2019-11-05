import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';
import { AdminComponent } from './admin/admin.component';
import { TodosPageComponent } from './todos-page/todos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TodosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoModule
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        prodMode: environment.production,
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
