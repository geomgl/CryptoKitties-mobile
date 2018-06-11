import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController) {

  }
  
  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      email:  this.email,
      password:  this.password
    })
  }
  
  navigateToHome() {
    this.navCtrl.push(HomePage);

  }





}
   
