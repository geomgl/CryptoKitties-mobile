import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityProfilePage } from '../charity_profile/charity_profile';
import { Charity } from '../../models/charity';
import { PortfolioPage } from '../portfolio/portfolio';

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

  icons: string;
  public charities: Array<Charity> = [];

  grid: Array<Array<Charity>>; //array of arrays of charities

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = "charities";
    
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


    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Headphones";
    charity4.mission = "Help me buy a new pair of headphones";
    charity4.description = "I need some new headphones because my old ones broke. Please help!";
    charity4.button = "headset";

    var charity5 = new Charity();
    charity5.id = 5;
    charity5.name = "Headphones";
    charity5.mission = "Help me buy a new pair of headphones";
    charity5.description = "I need some new headphones because my old ones broke. Please help!";
    charity5.button = "headset";
    
    var charity6 = new Charity();
    charity6.id = 6;
    charity6.name = "Headphones";
    charity6.mission = "Help me buy a new pair of headphones";
    charity6.description = "I need some new headphones because my old ones broke. Please help!";
    charity6.button = "headset";

    var charity7 = new Charity();
    charity7.id = 7;
    charity7.name = "Headphones";
    charity7.mission = "Help me buy a new pair of headphones";
    charity7.description = "I need some new headphones because my old ones broke. Please help!";
    charity7.button = "headset";
    
    var charity8 = new Charity();
    charity8.id = 8;
    charity8.name = "Headphones";
    charity8.mission = "Help me buy a new pair of headphones";
    charity8.description = "I need some new headphones because my old ones broke. Please help!";
    charity8.button = "headset";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
    this.charities.push(charity5);
    this.charities.push(charity6);
    this.charities.push(charity7);
    this.charities.push(charity8);

    this.grid = Array(Math.ceil(this.charities.length/4)); //MATHS!

    const num_cols = 4;

    for (let i = 0; i < this.charities.length; i += num_cols) {
      //console.log('making row')
      //console.log("starting at index" + i);
      this.grid[Math.floor(i / num_cols)] = this.charities.slice(i, i + num_cols);
    }

    //console.log(this.grid);
  }
  

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CharitiesPage');

    // let rowNum = 0; //counter to iterate over the rows in the grid

    // for (let i = 0; i < this.charities.length; i+=4) { //iterate charities

    // this.grid[rowNum] = Array(4); //declare two elements per row
    // }

    // rowNum++; //go on to the next row
  }

  

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage);

  }

  navigateToCharityProfile(charity: Charity) {
    this.navCtrl.push(CharityProfilePage, {
        charity: charity
    }
  );

  }

}
