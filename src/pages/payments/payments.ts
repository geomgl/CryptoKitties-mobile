import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';
import { Paymentmethod } from '../../models/paymentMethod';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
import { Donation } from '../../models/donation';
import { Project } from '../../models/project';
import { Http } from '@angular/http';

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
  public projects: Array<Project> = [];
  public charity: Charity = new Charity();
  public donation: Donation = new Donation();
  public amount: number = 100;
  public char_count: number = 1;
  public toppings: string = "One Time";
  public proj_select: string = "";
  public today: string = new Date().toISOString();
  public charity_id: 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.user = this.navParams.get("user");
    this.charity = this.navParams.get("charity");
    
    
  }

  donate() {  this.http
    .post("http://localhost:3000/donations", {
    amount: this.amount,
    user_id: this.user.user_id,
    charity_id: this.charity.charity_id,
    frequency: this.toppings,
    // project_id: this.proj_select,
    date: this.today
    
    }) 
    .subscribe (
      Result => {
      console.log(Result);

      this.navCtrl.push(PortfolioPage, {
        user: this.user,
        charity: this.charity,
        amount: this.amount,    
      });
      },
      Error => {
      console.log(Error);
      }
      );
      
      
}
project_list() {  this.http
  .get("http://localhost:3000/charities/" + this.charity.charity_id + "/projects") 
  .subscribe (
    Result => {
    console.log(Result);
    this.projects = Result.json() as Array<Project>;
    },
    Error => {
    console.log(Error);
    }
    );
    
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
    this.project_list();
    
  }
  navigateToProfile() {
    this.navCtrl.push(ProfilePage);

  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      charity: this.charity,
      amount: this.amount,    
    });

  }


}
