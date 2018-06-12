import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http)
     {   this.http
      .post("http://localhost:3000/login", {
      email: this.email,
      password: this.password
      }) 
      .subscribe (
        Result => {
        console.log(Result);
        },
        Error => {
        console.log(Error);
        }
        );
        
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
   
