import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharitiesPage } from '../charities/charities';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
  }
  
  navigateToHome() {
    this.navCtrl.push(HomePage);

  }
  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }
  
}
   