import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityProfilePage } from '../charity_profile/charity_profile';
import { Charity } from '../../models/charity';

/**
 * Generated class for the CharitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charities',
  templateUrl: 'charities.html',
})
export class CharitiesPage {

  public charities: Array<Charity> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  //Instantiate a new charity instance
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Apple";
    charity1.mission = "Donate to Apple, the world's largest company!";
    charity1.description = "Apple is cool. And it's big! You can donate to Apple and help us.";
    charity1.button = "logo-apple";


    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Google+";
    charity2.mission = "How about donating to Google+?";
    charity2.description = "Google+ is a social network dedicated to connecting people";
    charity2.button = "logo-googleplus";
  

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Headphones";
    charity3.mission = "Help me buy a new pair of headphones";
    charity3.description = "I need some new headphones because my old ones broke. Please help!";
    charity3.button = "headset";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitiesPage');
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }

  navigateToCharityProfile(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
        charity: charity
    }
  );

  }

}
