import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { Questions } from '../../app/questions';
import { IntroPage } from '../intro/intro';
/**
 * Generated class for the Level2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level2',
  templateUrl: 'level2.html',
})
export class Level2Page {

  header = "Animal QUIZ";
  score = 0;
  ind = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Level2Page');
  }

   animal = [
    new Questions("What is the largest type of ‘big cat’ in the world?", ["Lion", "Tiger", "Cheetah", "Cat"], "Tiger"),
    new Questions("What is the fastest land animal in the world?", ["Wildebeest", "Brown Hare", "Cheetah", "Antelope"], "Cheetah"),
    new Questions("True of false? Snakes have slimy skin.", ["True", "False"], "False"),
    new Questions("What type of animal is the largest primate in the world?", ["Gorilla", "Ape", "Monkey", "Human"], "Gorilla"),
    new Questions("What are baby goats called??", ["Goatlet", "Calf", "Slamp", "Kids"], "Kids")
  ] ;

  ques = this.animal[0].question;
  options = this.animal[0].choices;
  correctAnswer = this.animal[0].answer;

  totalQuestions = 5;
  questionsAnswered = 1; 

 choice(i){
   if(this.questionsAnswered == 5){
    if(this.animal[this.ind].choices[i] == this.animal[this.ind].answer){
      console.log(this.animal[this.ind].choices[i]);
      console.log(this.animal[this.ind].answer);
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
                this.ques = this.animal[this.ind].question;  
                this.options = this.animal[this.ind].choices;
              }
            }
          ]
        });
        confirm.present();
      }
    }

   }else
   if(this.questionsAnswered <= 4){
    if(this.animal[this.ind].choices[i] == this.animal[this.ind].answer){
      this.score += 1;
    }
    this.ind++;
    this.questionsAnswered++;
    this.ques = this.animal[this.ind].question;  
    this.options = this.animal[this.ind].choices;
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
    }else{

    }
  }
}

