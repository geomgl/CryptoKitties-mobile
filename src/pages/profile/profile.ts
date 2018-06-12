import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicApp } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharitiesPage } from '../charities/charities';
import { PaymentsPage } from '../payments/payments';
import { PortfolioPage } from '../portfolio/portfolio';
import Chart from 'chart.js';
import { Cryptoanimal } from '../../models/cryptoanimal';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
import { Donation } from '../../models/donation';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  icons: string;
  @ViewChild('doughnutCanvas') doughnutCanvas;
 
  doughnutChart: any;

  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;

  public charities: Array<Charity> = [];
  public user: User = new User();
  public charity: Charity = new Charity();
  public amount: number;
  public donation: Donation = new Donation();

  public cryptoanimals: Array<Cryptoanimal> = [];

  grid: Array<Array<Cryptoanimal>>; //array of arrays of cryptoanimals

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = "logo-octocat";

    var cryptoanimal1 = new Cryptoanimal();
    cryptoanimal1.id = 1;
    cryptoanimal1.name = "Cryptotoucan";
    cryptoanimal1.image = "../../assets/imgs/cryptotoucan.gif";


    var cryptoanimal2 = new Cryptoanimal();
    cryptoanimal2.id = 2;
    cryptoanimal2.name = "Cryptofrog";
    cryptoanimal2.image = "../../assets/imgs/cryptofrog.gif";


    var cryptoanimal3 = new Cryptoanimal();
    cryptoanimal3.id = 3;
    cryptoanimal3.name = "Cryptocougar";
    cryptoanimal3.image = "../../assets/imgs/cryptocougar.gif";

    var cryptoanimal4 = new Cryptoanimal();
    cryptoanimal4.id = 4;
    cryptoanimal4.name = "Cryptohippo";
    cryptoanimal4.image = "../../assets/imgs/cryptohippo.gif";


    var cryptoanimal5 = new Cryptoanimal();
    cryptoanimal5.id = 5;
    cryptoanimal5.name = "Cryptoferret";
    cryptoanimal5.image = "../../assets/imgs/cryptoferret.gif";


    var cryptoanimal6 = new Cryptoanimal();
    cryptoanimal6.id = 6;
    cryptoanimal6.name = "Cryptopenguin";
    cryptoanimal6.image = "../../assets/imgs/cryptopenguin.gif";

    
    var cryptoanimal7 = new Cryptoanimal();
    cryptoanimal7.id = 7;
    cryptoanimal7.name = "Cryptobug";
    cryptoanimal7.image = "../../assets/imgs/cryptobug.gif";


    var cryptoanimal8 = new Cryptoanimal();
    cryptoanimal8.id = 8;
    cryptoanimal8.name = "Cryptokoala";
    cryptoanimal8.image = "../../assets/imgs/cryptokoala.gif";
    

    this.cryptoanimals.push(cryptoanimal1);
    this.cryptoanimals.push(cryptoanimal2);
    this.cryptoanimals.push(cryptoanimal3);
    this.cryptoanimals.push(cryptoanimal4);
    this.cryptoanimals.push(cryptoanimal5);
    this.cryptoanimals.push(cryptoanimal6);
    this.cryptoanimals.push(cryptoanimal7);
    this.cryptoanimals.push(cryptoanimal8);

    this.grid = Array(Math.ceil(this.cryptoanimals.length/4)); //MATHS!

    const num_cols = 4;

    for (let i = 0; i < this.cryptoanimals.length; i += num_cols) {
      //console.log('making row')
      //console.log("starting at index" + i);
      this.grid[Math.floor(i / num_cols)] = this.cryptoanimals.slice(i, i + num_cols);
    }

  }

  ionViewDidLoad() {
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
    this.password = this.navParams.get("password");


  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
  //     type: 'doughnut',
  //     data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             hoverBackgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56",
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ]
  //         }]
  //     }

  // });
  }
  
  navigateToHome() {
    this.navCtrl.push(HomePage, {
      user: this.user,
      charity: this.charity
  });
}

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage, {
      user: this.user,
      charity: this.charity
  });
}


  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      user: this.user,
      charity: this.charity
  });

  }

  navigateToPayments() {
    this.navCtrl.push(PaymentsPage, {
      user: this.user,
      charity: this.charity
  });
}

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      charity: this.charity,
      amount: this.amount,
    });

  }
  
}
   