import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitiesPage } from '../../charities/charities';

/**
 * Generated class for the ApplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apple',
  templateUrl: 'apple.html',
})
export class ApplePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplePage');
  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

}
