import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';
import { UserProvider } from '../providers/user/user';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    ListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider, DatePipe
  ]
})
export class AppModule {}
