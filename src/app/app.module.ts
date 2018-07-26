import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Level1Page } from '../pages/level1/level1';
import { Level2Page } from '../pages/level2/level2';
import { Level3Page } from '../pages/level3/level3';
import { Level4Page } from '../pages/level4/level4';
import { Level5Page } from '../pages/level5/level5';
import { IntroPage } from '../pages/intro/intro';
import { ResultsPage } from '../pages/results/results';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Level1Page,
    Level2Page,
    Level3Page,
    Level4Page,
    Level5Page,
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
    Level2Page,
    Level3Page,
    Level4Page,
    Level5Page,
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
