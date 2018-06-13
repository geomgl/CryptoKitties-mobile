import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';
import { Creditcard } from '../../models/creditcard';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
import { Donation } from '../../models/donation';

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

  public user: User = new User();
  public charity: Charity = new Charity();
  public amount: number;
  public count: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("user");
    this.charity = this.navParams.get("charity");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  navigateToProfile() {
    this.navCtrl.push(ProfilePage);

  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      charity: this.charity,
      amount: this.amount,
      count: 1,
    });

  }


}
