import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Level1Page } from '../level1/level1';
import { Level2Page } from '../level2/level2';
import { Level3Page } from '../level3/level3';
import { Level4Page } from '../level4/level4';
import { Level5Page } from '../level5/level5';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  level1(){
    this.navCtrl.push(Level1Page);
  }
  level2(){
    this.navCtrl.push(Level2Page);
  }
  level3(){
    this.navCtrl.push(Level3Page);
  }
  level4(){
    this.navCtrl.push(Level4Page);
  }
  level5(){
    this.navCtrl.push(Level5Page);
  }

}
