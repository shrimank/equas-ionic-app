import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SelectClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-class',
  templateUrl: 'select-class.html',
  
})
export class SelectClassPage implements OnInit {

  grades : any[]=[];
  today:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  selectedClass(grade:any){
    console.log(grade);
    this.navCtrl.push('AttendancePage',{'grade':grade});
  }

  

  ngOnInit() {
    this.grades =[
        {
          name:'1st',
          count:'20',
          todaysAttendanceFlag:'n'
          // absent:3,
          // present:17
        },
        {
          name:'2nd',
          count:'30',
          todaysAttendanceFlag:'y',
           absent:3,
           present:27
        },
        {
          name:'3rd',
          count:'30',
          todaysAttendanceFlag:'n'
          // absent:4,
          // present:26
        },
        {
          name:'4th',
          count:'40',
          todaysAttendanceFlag:'y',
          absent:2,
          present:38
        },
        {
          name:'5th',
          count:'50',
          todaysAttendanceFlag:'n'
          //absent:5,
          //present:45
        },
        {
          name:'6th',
          count:'45',
          todaysAttendanceFlag:'y',
          absent:3,
          present:17
        },
        {
          name:'7th',
          count:'38',
          todaysAttendanceFlag:'y',
          absent:3,
          present:35
        },
        {
          name:'8th',
          count:'60',
          todaysAttendanceFlag:'y',
          absent:6,
          present:54
        },
        {
          name:'9th',
          count:'56',
          todaysAttendanceFlag:'n'
         // absent:3,
         // present:53
        },
        {
          name:'10th',
          count:'70',
          todaysAttendanceFlag:'y',
          absent:8,
          present:62
        }


    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectClassPage');
    
  }

}
