import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Questions } from '../../app/questions';
import { IntroPage } from '../intro/intro';

/**
 * Generated class for the Level3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level3',
  templateUrl: 'level3.html',
})
export class Level3Page {

  header = "Geography Quiz";
  score = 0;
  ind = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level3Page');
  }

  geography= [

    new Questions("Iceland is covered in ice.", ["True", "False"], "False"),
    new Questions("Which ocean lies on the east coast of the United States?", ["Arctic Ocean", "Pacific Ocean", "Indian Ocean", "Atlantic Ocean"], "Atlantic Ocean"),
    new Questions("Which is the world's highest mountain?", ["Mount Everest", "Kangchenjunga", "Mount Godwin-Austen", "Makalu"], "Mount Everest"),
    new Questions("The biggest desert in the world is. . ?", ["Black Rock Desert", "Mojave Desert", "Antarctic Desert", "Sahara"], "Sahara"),
    new Questions("This specifies a location’s distance north or south of the equator.", ["Logitute", "Latitude"], "Latitude")
  ] ;


  ques = this.geography[0].question;
  options = this.geography[0].choices;
  correctAnswer = this.geography[0].answer;

  totalQuestions = 5;
  questionsAnswered = 1; 

 choice(i){
   if(this.questionsAnswered == 5){
    if(this.geography[this.ind].choices[i] == this.geography[this.ind].answer){
      console.log(this.geography[this.ind].choices[i]);
      console.log(this.geography[this.ind].answer);
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
                this.ques = this.geography[this.ind].question;  
                this.options = this.geography[this.ind].choices;
              }
            }
          ]
        });
        confirm.present();
      }
    }

   }else
   if(this.questionsAnswered <= 4){
    if(this.geography[this.ind].choices[i] == this.geography[this.ind].answer){
      this.score += 1;
    }
    this.ind++;
    this.questionsAnswered++;
    this.ques = this.geography[this.ind].question;  
    this.options = this.geography[this.ind].choices;
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
