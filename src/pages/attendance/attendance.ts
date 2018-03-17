import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Toast } from '@ionic-native/toast';
import { STUDENT_LIST } from '../../models/student.model';
import { UtilService } from '../../services/util.service';
import { AttendanceService } from '../../services/attendance.service';
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

  grade: string = '';
  maleAvatarUrl = 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png';
  femaleAvatarUrl = 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png';
  students: any[] = [];
  today: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private alertCtrl: AlertController,
    private toast: Toast, private utilService: UtilService,
    private attendanceService:AttendanceService) {
    this.grade = this.navParams.get('grade');
    this.students = STUDENT_LIST;
    this.today = this.utilService.getDate(new Date());
    
  }

  submit() {
    console.log("Submitting", this.students);
    this.students.forEach(s => s.grade = this.grade);

    let absent = this.students.filter(s=>!s.presentFlag);
    let present = this.students.filter(s=>s.presentFlag);


    console.log("Changing", this.students);
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: `Present -${present.length} & Absent - ${absent.length}, Do you want to submit ?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

            console.log('canceled.');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.toast.show(`Attendance submitted.`, '5000', 'center').subscribe(
              toast => {
                console.log(toast);
                this.attendanceService.addStudentAttendance(this.students);
              }
            );
            this.navCtrl.pop();

          }
        }
      ]
    });
    alert.present();
  }

  goToHome() {
    this.navCtrl.setRoot(TabsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

}
