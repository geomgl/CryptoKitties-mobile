import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharitiesPage } from '../charities/charities';
import { Charity } from '../../models/charity';

/**
 * Generated class for the ApplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity_profile',
  templateUrl: 'charity_profile.html',
})
export class CharityProfilePage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.charity = this.navParams.get("charity");

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

}
