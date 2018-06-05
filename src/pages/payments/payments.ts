import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';
import { Creditcard } from '../../models/creditcard';
import { Charity } from '../../models/charity';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  this.charity = this.navParams.get("charity");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage);

  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);

  }


}
