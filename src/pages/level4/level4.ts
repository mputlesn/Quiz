import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Questions } from '../../app/questions';
import { IntroPage } from '../intro/intro';

/**
 * Generated class for the Level4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level4',
  templateUrl: 'level4.html',
})
export class Level4Page {

  header = "Animal QUIZ";
  score = 0;
  ind = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level4Page');
  }

  body = [
    new Questions("Where in the body is the scapular muscle?", ["Head", "Toe", "Finger", "Shoulder"], "Shoulder"),
    new Questions("What is the name of the only bone in the body not connected to another?", ["Hyoid", "Sphenoid bone ", "Ethmoid bone", "Mandible"], "Hyoid"),
    new Questions("According to the Red Cross what is the most common Blood Type?", ["Blood Type AB", "Blood Type A", "Blood Type B", "Blood Type O"], "Blood Type O"),
    new Questions("Where in the body is the thyroid gland found?", ["Neck", "Shoulder", "Leg", "Arm"], "Neck"),
    new Questions("What is the knee-jerk reflex called?", ["Crossed extensor reflex", "Blushing", "Patella Reflex", "Abdominal reflex"], "Patella Reflex")
  ] ;


  ques = this.body[0].question;
  options = this.body[0].choices;
  correctAnswer = this.body[0].answer;

  totalQuestions = 5;
  questionsAnswered = 1; 

 choice(i){
   if(this.questionsAnswered == 5){
    if(this.body[this.ind].choices[i] == this.body[this.ind].answer){
      console.log(this.body[this.ind].choices[i]);
      console.log(this.body[this.ind].answer);
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
                this.ques = this.body[this.ind].question;  
                this.options = this.body[this.ind].choices;
              }
            }
          ]
        });
        confirm.present();
      }
    }

   }else
   if(this.questionsAnswered <= 4){
    if(this.body[this.ind].choices[i] == this.body[this.ind].answer){
      this.score += 1;
    }
    this.ind++;
    this.questionsAnswered++;
    this.ques = this.body[this.ind].question;  
    this.options = this.body[this.ind].choices;
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
