import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AuthService } from '../../auth.service';
import { callbackify } from 'util';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) { }


  login() {
    // make call to server and check validity of login credentials 
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        password: this.password
      }).subscribe(
        result => {
          // if successful, proceed to profile page and push data
          console.log('successful login');
          this.navCtrl.push(ProfilePage, {
            email: this.email,
            password: this.password
          });
        },
        error => {
          console.log("invalid credentials");
          alert("Incorrect username or password");
        }
      );

  }


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      email: this.email,
      password: this.password
    })
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }





}

