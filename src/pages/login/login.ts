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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public authService:  AuthService
  ) {}
      // {   this.http
      //   .post("http://localhost:3000/login", {
      //   email: this.email,
      //   password: this.password
      //   }) 
      //   .subscribe (
      //     Result => {
      //     console.log(Result);
      //     },
      //     Error => {
      //     console.log(Error);
      //     }
      //     );

          // var responseJson = result.json();
          // console.log("jwt: ", responseJson.token);
          
          //store the token in local storage
          //localStorage.setItem("TOKEN", response.token) -- token no longer passed via navParams, so need to get it from local storage
      
      ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
      }

      login() {
        let callback = (err) => {
          if (err) {
            // TODO: display error
            return;
          }
    
          this.navCtrl.push(ProfilePage);
        }

      AuthService.login(this.email, this.password, callback);
  

    }


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      email:  this.email,
      password:  this.password
      // token: 
    })
  }
  
  navigateToHome() {
    this.navCtrl.push(HomePage);

  }





}
   
