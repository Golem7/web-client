import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UserEffects } from './ngrx/user/user.effects';
import { environment } from '../environments/environment';
import { ToastEffects } from './ngrx/toastr/toastr.effects';
import { LayoutModule } from './layout/layout.module';
import { metaReducers, reducers } from './ngrx/reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ShipsModule } from './ships/ships.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'golem-vii' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot({
      duration: 5000,
    }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    FlexLayoutModule,
    LoginModule,
    LayoutModule,
    ShipsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, ToastEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
})
export class AppModule {}
