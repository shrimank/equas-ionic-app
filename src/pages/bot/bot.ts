import { Component, ViewChild, NgZone } from '@angular/core';
import { Content, ViewController, NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify';

/**
 * Generated class for the BotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare  var window;

@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html',
})
export class BotPage {
  searchQuery: string = '';
  items: any[];
  term: string = '';
  messages: any[] = [];
  text: string = '';
  apiAiUrl: string = '';
  client_access_key :string='dc73ace8d13a4cd2bc1c9a62cbb88f25';
  @ViewChild(Content) content;
  userName: any;
  constructor(public ngZone: NgZone,private view: ViewController, private navCtrl: NavController, private http: HttpClient,private tts:TextToSpeech) {
    let data :any = {};
  this.messages.push({
        text: 'Hi, Welcome to eQuas AI Bot! How may I help you ?',
        sender: 'api',
        data
      });
    Auth.currentUserInfo().then(info => {
      this.userName =info.username;
      this.messages[0].text= `Hi ${this.userName}, Welcome to eQuas AI Bot! How may I help you ?`;
        
    },err => console.log('err',err))


    

   

  }

  closeModal() {
    this.view.dismiss();
  }

  sendText() {
    let message = this.text;
    let headers = {
      "Authorization": `Bearer ${this.client_access_key}`
    }
    //let data = {query:message};
    this.messages.push({
      text: message,
      sender: 'me'
    });
    this.apiAiUrl = `https://ko95khdue6.execute-api.ap-south-1.amazonaws.com/dev?v=20180313&query=${message}&lang=en&sessionId=1234`;
    this.http.get(this.apiAiUrl, { headers: headers }).subscribe((res: any) => {
      console.log("Success:" + JSON.stringify(res, null, 2));
      let speechText = res.result.fulfillment.speech;
      let data :any = {}; 
      try{
        data =JSON.parse(speechText);
        if(data.type){
          speechText = data.text;
        }
      }catch(error){
        console.log('Cannot parse speechText since it is not a json string',error);
      }

      this.messages.push({
        text: speechText,
        sender: 'api',
        data : data
      });
    }, err => {
      console.log("Error" + JSON.stringify(err, null, 2));
    });


    this.content.scrollToBottom(200);
    this.text = '';



  }

  sendVoice() {

     window['ApiAIPlugin'].requestVoice({},
       (res) => {

        let speechText = res.result.fulfillment.speech;
        let data :any = {}; 
        try{
          data =JSON.parse(speechText);
          if(data.type){
            speechText = data.text;
          }
        }catch(error){
          console.log('Cannot parse speechText since it is not a json string',error);
        }



        this.tts.speak({
          text: speechText,
          locale: 'en-IN',
          rate: 1
        });
      }, (error) => {
        alert("Error:Voice" + JSON.stringify(error));
      });
  }



  getItems(ev: any) {
    this.items = [
      { code: 'Fall Cheerleading', name: 'Fall Cheerleading', type: 'page', action: HomePage },
      { code: 'Payment History', name: 'Payment History', type: 'page', action: HomePage },
      { code: 'Excise', name: 'Excise', type: 'page', action: HomePage },
      { code: 'Personal Property', name: 'Personal Property', type: 'page', action: HomePage },
      { code: 'Real Estate', name: 'Real Estate', type: 'page', action: HomePage },
      { code: 'Water', name: 'Water', type: 'page', action: HomePage },
      { code: 'Fall Cross Country Boys', name: 'Fall-Cross Country Boys', type: 'page', action: HomePage },
      { code: 'Winter Sports', name: 'Winter Sports', type: 'page', action: HomePage },
      { code: 'Beach Sticker', name: 'Beach Sticker', type: 'page', action: HomePage },
      { code: 'Transfer Station Sticker', name: 'Transfer Station Sticker', type: 'page', action: HomePage },
    ];


    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.code.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goTo(page: any, title: string) {
    this.navCtrl.push(page, { 'PageTitle': title });
  }


}
