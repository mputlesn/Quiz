import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Questions } from '../../app/questions';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Level1Page');
  }

  mzansi = [
    new Questions("Do you know what Soweto stands for?", ["South Western Townships", "South West Town", "Soggy Western Town", "South African Western Town"], "South Western Townships"),
    new Questions("This mountain is one of the most popular places for tourists in South Africa. Can you name it?", ["Lion's Head", "Devil's Peak", " Table Mountain", "Champagne Castle"], "Table Mountain"),
    new Questions("This game park is the largest in South Africa. What is it?", ["Pilanesburg Game Reserve", "Kgalagadi Transfrontier Park", "Kruger National Park", "Madikwe Game Reserve"], "Kruger National Park"),
    new Questions("Johannesburg's population boomed after what was found there?", ["Uranium", "Cocoa Beans", "Gold", "Oil"], "Gold"),
    new Questions("How many languages are recognized in South Africa?", ["7", "11", "9", "17"], "11"),
  ];

  ques = this.mzansi[0].question;
  options = this.mzansi[0].choices;
  correctAnswer = this.mzansi[0].answer;

  y = 5;
  x = 1; 

 choice(i){
   console.log("index "+i);
   this.x += 1;
   for (let index = 0; index < this.mzansi.length; index++) {
    if(this.mzansi[index].choices[i] == this.mzansi[index].answer){
      console.log("choice "+this.mzansi[index].choices[i]);
      console.log("answer "+this.mzansi[index].answer);
      this.score += 1;
      console.log("score "+this.score);
    }
  
   }
 
//     for (let index = 0; index < 4; index++) {
      
//       if(this.mzansi[index].choices[i] == this.mzansi[index].answer){
//         this.score += 1;
//         console.log("score "+this.score);
        
        
//         this.ques = this.mzansi[i+1].question;
//         this.options = this.mzansi[i+1].choices;
//         this.correctAnswer = this.mzansi[i+1].answer;

//       }
//  }
   
 }




  // mzansi: { ques: string, answer: string }[] = [
  //   { "ques": "Do you know what Soweto stands for?", "answer": "South Western Townships" },
  //   { "ques": "This mountain is one of the most popular places for tourists in South Africa. Can you name it?", "answer": "Table Mountain" },
  //   { "ques": "This game park is the largest in South Africa. What is it?", "answer": "Kruger National Park" },
  //   { "ques": "Johannesburg's population boomed after what was found there?", "answer": "Gold" },
  //   { "ques": "How many languages are recognized in South Africa?", "answer": "11" }
  // ] ;

  // mOptions1 = ["South Western Townships", "South West Town", "Soggy Western Town", "South African Western Town"] ;
  // mOptions2 = ["Lion's Head", "Devil's Peak", " Table Mountain", "Champagne Castle"] ;
  // mOptions3 = ["Pilanesburg Game Reserve", "Kgalagadi Transfrontier Park", "Kruger National Park", "Madikwe Game Reserve"] ;
  // mOptions4 = ["Uranium", "Cocoa Beans", "Gold", "Oil"] ;
  // mOptions5 = ["7", "11", "9", "17"] ;

  // animal: { ques: string, answer: string }[] = [
  //   { "ques": "What is the largest type of ‘big cat’ in the world?", "answer": "Tiger" },
  //   { "ques": "What is the fastest land animal in the world?", "answer": "Cheetah" },
  //   { "ques": "True of false? Snakes have slimy skin.", "answer": "False" },
  //   { "ques": "	What type of animal is the largest primate in the world?", "answer": "Gorilla" },
  //   { "ques": "What are baby goats called??", "answer": "Kids" }
  // ] ;

  // geography: { ques: string, answer: string }[] = [
  //   { "ques": "True or False: Iceland is covered in ice.", "answer": "False" },
  //   { "ques": "Which ocean lies on the east coast of the United States?", "answer": "Table Mountain" },
  //   { "ques": "Which is the world's highest mountain?", "answer": "Mount Everest" },
  //   { "ques": "The biggest desert in the world is. . ?", "answer": "Sahara" },
  //   { "ques": "This specifies a location’s distance north or south of the equator.", "answer": "Latitude" }
  // ] ;

  // body: { ques: string, answer: string }[] = [
  //   { "ques": "Where in the body is the scapular muscle?", "answer": "Shoulder" },
  //   { "ques": "What is the name of the only bone in the body not connected to another?", "answer": "Hyoid" },
  //   { "ques": "According to the Red Cross what is the most common Blood Type?", "answer": "Blood Type O" },
  //   { "ques": "Where in the body is the thyroid gland found?", "answer": "Neck" },
  //   { "ques": "What is the knee-jerk reflex called?", "answer": "Patella Reflex" }
  // ] ;

  // riddles: { ques: string, answer: string }[] = [
  //   { "ques": "What has a face and two hands but no arms or legs?", "answer": "A clock" },
  //   { "ques": "What has to be broken before you can use it?", "answer": "An egg." },
  //   { "ques": "What has a neck but no head?", "answer": " A bottle." },
  //   { "ques": "What goes up and doesn’t come back down?", "answer": "Your age." },
  //   { "ques": "Everyone has it and no one can lose it, what is it?", "answer": "A shadow." }
  // ] ;

 
}

export class Quiz{
  question: string;
  answer: string;

  constructor(question: string, answer: string){
    this.question = question;
    this.answer = answer;
  }
}
