import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ConfirmSignInPage } from '../confirmSignIn/confirmSignIn';

const logger = new Logger('Login');

export class LoginDetails {
  username: string;
  password: string;
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  public loginDetails: LoginDetails;
  login_header_image:string='https://s3.ap-south-1.amazonaws.com/myequas-images/login-header.jpg';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
    this.loginDetails = new LoginDetails(); 
    this.loginDetails.username='shrimank';
    this.loginDetails.password='Evolvus*123';
  }

  login() {
    
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let details = this.loginDetails;
    logger.info('login..');
    Auth.signIn(details.username, details.password)
      .then(user => {
        
        console.log('signed in user',JSON.stringify(user,null,2)); 
        if (user.challengeName === 'SMS_MFA') {
          this.navCtrl.push(ConfirmSignInPage, { 'user': user });
        } else {
          this.navCtrl.setRoot(TabsPage);
        }
      })
      .catch(err => alert('error'+err))
      .then(() => loading.dismiss());
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

}
