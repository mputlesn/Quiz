import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Level1Page } from '../pages/level1/level1';
import { IntroPage } from '../pages/intro/intro';
import { ResultsPage } from '../pages/results/results';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Level1Page,
    IntroPage,
    ResultsPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Level1Page,
    IntroPage,
    ResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
