import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {BotPage} from '../bot/bot';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.cards =[
      {
        header:'Students',
        icon_name:'contact',
        items:[
            {
            icon_name:'people',
            name:'Classes',
            page:'ClassesPage'
              },
            {
            icon_name:'stats',
            name:'Marks',
            page:'SelectClassPage'
              },
            {
            icon_name:'information-circle',
            name:'History',
            page:'SelectClassPage'
              },
            {
            icon_name:'create',
            name:'Leaves',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Staffs',
        icon_name:'people',
        items:[
            {
            icon_name:'bookmarks',
            name:'Syllabus',
            page:'SelectClassPage'
              },
            {
            icon_name:'checkbox-outline',
            name:'Attendance',
            page:'SelectClassPage'
              },
            {
            icon_name:'create',
            name:'Leaves',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Attendance Report',
        icon_name:'checkbox',
        items:[
            {
            icon_name:'person',
            name:'Students',
            page:'SelectClassPage'
              },
            {
            icon_name:'contact',
            name:'Teaching Staffs',
            page:'SelectClassPage'
              },
            {
            icon_name:'contacts',
            name:'Non-Teaching Staffs',
            page:'SelectClassPage'
              }
            ]
      },
    {
        header:'Analysis Report',
        icon_name:'pulse',
        items:[
            {
            icon_name:'person',
            name:'Students',
            page:'SelectClassPage'
              },
            {
            icon_name:'contact',
            name:'Teaching Staffs',
            page:'SelectClassPage'
              },
            {
            icon_name:'contacts',
            name:'Non-Teaching Staffs',
            page:'SelectClassPage'
              }
            ]
      }
    
    ];
  }

  openAIModal(){
    let  modal  =  this.modalCtrl.create(BotPage);
    modal.present();
  }

}
