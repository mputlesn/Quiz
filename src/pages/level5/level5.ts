import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { Questions } from '../../app/questions';
import { IntroPage } from '../intro/intro';
/**
 * Generated class for the Level5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level5',
  templateUrl: 'level5.html',
})
export class Level5Page {

  header = "Mzansi QUIZ";
  score = 0;
  ind = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level5Page');
  }


  soccer = [
    new Questions("Which of the following players is not Brazilian?", ["Philippe Coutinnho", "Eden Hazard", "Gabriel Jesus", "Neymar"], "Eden Hazard"),
    new Questions("What national team does Mesut Ozil play for?", ["Germany", "South Africa", "Brazil", "England"], "Germany"),
    new Questions("Which of these players plays or played for Real Madrid?", ["Romelu Lukaku", "Sergio Aguero", "Dani Alves", "Gareth Bale"], "Gareth Bale"),
    new Questions("Who plays for Argentina?", ["Luis Suarez", "Sergio Aguero", "Robert Lewandowski", "Andres Iniesta"], "Sergio Aguero"),
    new Questions("Which of these players is a goalkeeper?", ["Sergio Ramos", "Edinson Cavani", "Gianluigi Donnarumma", "Kyriakos Papadopoulos"], "Gianluigi Donnarumma"),
   ];

  ques = this.soccer[0].question;
  options = this.soccer[0].choices;
  correctAnswer = this.soccer[0].answer;

  totalQuestions = 5;
  questionsAnswered = 1; 

 choice(i){
   if(this.questionsAnswered == 5){
    if(this.soccer[this.ind].choices[i] == this.soccer[this.ind].answer){
      console.log(this.soccer[this.ind].choices[i]);
      console.log(this.soccer[this.ind].answer);
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
                this.ques = this.soccer[this.ind].question;  
                this.options = this.soccer[this.ind].choices;
              }
            }
          ]
        });
        confirm.present();
      }
    }

   }else
   if(this.questionsAnswered <= 4){
    if(this.soccer[this.ind].choices[i] == this.soccer[this.ind].answer){
      this.score += 1;
    }
    this.ind++;
    this.questionsAnswered++;
    this.ques = this.soccer[this.ind].question;  
    this.options = this.soccer[this.ind].choices;
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


