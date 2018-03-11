import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { STUDENT_LIST } from '../../models/student.model';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  grade:string='';
  maleAvatarUrl = 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png';
  femaleAvatarUrl= 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png';
  
  students:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.grade=this.navParams.get('grade');
    this.students = STUDENT_LIST;
  }

  submit() {

  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }    
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
