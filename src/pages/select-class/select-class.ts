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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  selectedClass(grade:any){
    console.log(grade);
    this.navCtrl.setRoot('AttendancePage',{'grade':grade});
  }

  ngOnInit() {
    this.grades =[
        {
          name:'1st',
          count:'20'
        },
        {
          name:'2nd',
          count:'30'
        },
        {
          name:'3rd',
          count:'30'
        },
        {
          name:'4th',
          count:'40'
        },
        {
          name:'5th',
          count:'50'
        },
        {
          name:'6th',
          count:'45'
        },
        {
          name:'7th',
          count:'38'
        },
        {
          name:'8th',
          count:'60'
        },
        {
          name:'9th',
          count:'56'
        },
        {
          name:'10th',
          count:'70'
        }


    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectClassPage');
    
  }

}
