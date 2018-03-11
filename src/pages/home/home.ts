import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  cards:any[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
            name:'Marks',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'History',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'Leaves',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Staffs',
        items:[
            {
            icon_name:'cart',
            name:'Syllabus',
            page:'SelectClassPage'
              },
            {
            icon_name:'medical',
            name:'Attendance',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'Leaves',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Attendance Report',
        items:[
            {
            icon_name:'cart',
            name:'Students',
            page:'SelectClassPage'
              },
            {
            icon_name:'medical',
            name:'Teaching Staffs',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'Non-Teaching Staffs',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Analysis Report',
        items:[
            {
            icon_name:'cart',
            name:'Students',
            page:'SelectClassPage'
              },
            {
            icon_name:'medical',
            name:'Teaching Staffs',
            page:'SelectClassPage'
              },
            {
            icon_name:'cafe',
            name:'Non-Teaching Staffs',
            page:'SelectClassPage'
              }
            ]
      }
    
    ];
  }

}
