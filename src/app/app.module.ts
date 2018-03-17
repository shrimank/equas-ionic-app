import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConfirmSignInPage } from '../pages/confirmSignIn/confirmSignIn';
import { ConfirmSignUpPage } from '../pages/confirmSignUp/confirmSignUp';
import { ConfirmPage }  from '../pages/confirm/confirm';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksCreatePage } from '../pages/tasks-create/tasks-create';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Toast } from '@ionic-native/toast';
import { DynamoDB } from '../providers/aws.dynamodb';

import Amplify from 'aws-amplify';
import { HomePageModule } from '../pages/home/home.module';
import { BotPageModule } from '../pages/bot/bot.module';
import { SelectClassPageModule } from '../pages/select-class/select-class.module';
import { AttendancePageModule } from '../pages/attendance/attendance.module';
import { ClassesPageModule } from '../pages/classes/classes.module';
import { UtilService}  from '../services/util.service';
import { AttendanceService } from '../services/attendance.service';
const aws_exports = require('../aws-exports').default;

Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    SettingsPage,
    ConfirmPage,
    AboutPage,
    AccountPage,
    TabsPage,
    TasksPage,
    TasksCreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HomePageModule,
    SelectClassPageModule,
    AttendancePageModule,
    ClassesPageModule,
    BotPageModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    SettingsPage,
    AboutPage,
    AccountPage,
    TabsPage,
    ConfirmPage,
    TasksPage,
    TasksCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DynamoDB,
    TextToSpeech,
    Toast,
    UtilService,
    AttendanceService
  ]
})
export class AppModule {}

declare var AWS;
AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';
