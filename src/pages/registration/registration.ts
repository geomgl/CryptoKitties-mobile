import { Component } from '@angular/core';
import { NavController, NavControllerBase, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharitiesPage } from '../charities/charities';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public first_name: string;
  public last_name: string;
  public email: string;
  public password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {}

  register() {
    // make call to server and check validity of login credentials 
    this.http
      .post("http://localhost:3000/register", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password

      }).subscribe(
        result => {
          // if successful, proceed to profile page and push data
          console.log('successful login');
          this.navCtrl.push(ProfilePage, {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
          });
        },
        error => {
          console.log("Unable to register, please try again.");
          alert("Unable to register, please try again.");
        }
      );

  }


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      firstName: this.first_name,
      lastName:  this.last_name,
      email:  this.email,
      password:  this.password,
    })

  }

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }
}
   