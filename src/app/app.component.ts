import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from 'aws-amplify';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
declare var window;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let globalActions = function () {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    };

    platform.ready()
      .then(() => {
        Auth.currentAuthenticatedUser()
          .then(() => {
          this.rootPage = TabsPage;
            //Initialize API AI
          window['ApiAIPlugin'].init(
              {
                clientAccessToken: "dc73ace8d13a4cd2bc1c9a62cbb88f25", // insert your client access key here 
                lang: "en" // set lang tag from list of supported languages 
              },
              function (result) {
                console.log(result);
              },
              function (error) {
                alert(error);
              }
            );


          })
          .catch(() => { this.rootPage = LoginPage; })
          .then(() => globalActions());
      });
  }
}
