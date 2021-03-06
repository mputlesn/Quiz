import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { Questions } from '../../app/questions';
import { IntroPage } from '../intro/intro';

/**
 * Generated class for the Level1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level1',
  templateUrl: 'level1.html',
})
export class Level1Page {

  header = "Mzansi QUIZ";
  score = 0;
  ind = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level1Page');
  }

  mzansi = [
    new Questions("Do you know what Soweto stands for?", ["South Western Townships", "South West Town", "Soggy Western Town", "South African Western Town"], "South Western Townships"),
    new Questions("This mountain is one of the most popular places for tourists in South Africa. Can you name it?", ["Lion's Head", "Table Mountain", "Devil's Peak", "Champagne Castle"], "Table Mountain"),
    new Questions("This game park is the largest in South Africa. What is it?", ["Pilanesburg Game Reserve", "Kgalagadi Transfrontier Park", "Kruger National Park", "Madikwe Game Reserve"], "Kruger National Park"),
    new Questions("Johannesburg's population boomed after what was found there?", ["Uranium", "Cocoa Beans", "Gold", "Oil"], "Gold"),
    new Questions("How many languages are recognized in South Africa?", ["7", "11", "9", "17"], "11"),
   ];

  ques = this.mzansi[0].question;
  options = this.mzansi[0].choices;
  correctAnswer = this.mzansi[0].answer;

  totalQuestions = 5;
  questionsAnswered = 1; 

 choice(i){
   if(this.questionsAnswered == 5){
    if(this.mzansi[this.ind].choices[i] == this.mzansi[this.ind].answer){
      console.log(this.mzansi[this.ind].choices[i]);
      console.log(this.mzansi[this.ind].answer);
      console.log("before "+this.score);
      this.score += 1;
      console.log("after"+this.score);
      

      if(this.score == 5){
        const confirm = this.alertCtrl.create({
          title: 'Score',
          message: 'Congrats Level Completed '+"<br>"+'You answered all the questions correct! ',
          buttons: [
            {
              text: 'Next Level',
              handler: () => {
                this.navCtrl.push(IntroPage);
              }
            }
          ]
        });
        confirm.present();
      }else{
        const confirm = this.alertCtrl.create({
          title: 'Score',
          message: 'You have answered only '+this.score+'questions correct.'+"<br>"+' You need to answer all the questions correct to move to the next level! ',
          buttons: [
            {
              text: 'Try Again',
              handler: () => {
                this.ind = 0;
                this.score = 0;
                this.questionsAnswered = 1;
                this.ques = this.mzansi[this.ind].question;  
                this.options = this.mzansi[this.ind].choices;
              }
            }
          ]
        });
        confirm.present();
      }
    }

   }else
   if(this.questionsAnswered <= 4){
    if(this.mzansi[this.ind].choices[i] == this.mzansi[this.ind].answer){
      this.score += 1;
    }
    this.ind++;
    this.questionsAnswered++;
    this.ques = this.mzansi[this.ind].question;  
    this.options = this.mzansi[this.ind].choices;
   }
  }

  finish(){
    if(this.score == 5){
      const confirm = this.alertCtrl.create({
        title: 'Score',
        message: 'Congrats Level Completed '+"<br>"+'You answered all the questions correct! ',
        buttons: [
          {
            text: 'Next Level',
            handler: () => {
              this.navCtrl.push(IntroPage);
            }
          }
        ]
      });
      confirm.present();
    }
  }
}

