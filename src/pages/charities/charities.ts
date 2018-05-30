import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApplePage } from '../company_list/apple/apple';

/**
 * Generated class for the CharitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charities',
  templateUrl: 'charities.html',
})
export class CharitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitiesPage');
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }
  navigateToApple() {
    this.navCtrl.push(ApplePage);

  }

}
