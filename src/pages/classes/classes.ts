import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {

  cards:any[]=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesPage');
    this.cards =[
      {
        header:'Students',
        items:[
            {
            icon_name:'cart',
            name:'Attendance',
            page:'SelectClassPage'
              },
            {
            icon_name:'medical',
            name:'Tests',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'Test Results',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'ReportCards',
            page:'SelectClassPage'
              }
            ]
      }];
  }

}
