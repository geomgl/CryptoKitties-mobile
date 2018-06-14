import { Component, ViewChild, ApplicationRef } from '@angular/core';
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
import { CryptoanimalPage } from '../cryptoanimal/cryptoanimal';

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

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private appRef: ApplicationRef) {
    this.icons = "logo-octocat";

    var cryptoanimal1 = new Cryptoanimal();
    cryptoanimal1.animal_id = 1;
    cryptoanimal1.name = "Crypto Toucan";
    cryptoanimal1.img = "../../assets/imgs/cryptotoucan.gif";
    cryptoanimal1.description = "This is a toucan";

    var cryptoanimal2 = new Cryptoanimal();
    cryptoanimal2.animal_id = 2;
    cryptoanimal2.name = "Crypto Frog";
    cryptoanimal2.img = "../../assets/imgs/cryptofrog.gif";


    var cryptoanimal3 = new Cryptoanimal();
    cryptoanimal3.animal_id = 3;
    cryptoanimal3.name = "Crypto Cougar";
    cryptoanimal3.img = "../../assets/imgs/cryptocougar.gif";

    var cryptoanimal4 = new Cryptoanimal();
    cryptoanimal4.animal_id = 4;
    cryptoanimal4.name = "Crypto Hippo";
    cryptoanimal4.img = "../../assets/imgs/cryptohippo.gif";


    var cryptoanimal5 = new Cryptoanimal();
    cryptoanimal5.animal_id = 5;
    cryptoanimal5.name = "Crypto Ferret";
    cryptoanimal5.img = "../../assets/imgs/cryptoferret.gif";


    var cryptoanimal6 = new Cryptoanimal();
    cryptoanimal6.animal_id = 6;
    cryptoanimal6.name = "Crypto Penguin";
    cryptoanimal6.img = "../../assets/imgs/cryptopenguin.gif";

    
    var cryptoanimal7 = new Cryptoanimal();
    cryptoanimal7.animal_id = 7;
    cryptoanimal7.name = "Crypto Bug";
    cryptoanimal7.img = "../../assets/imgs/cryptobug.gif";


    var cryptoanimal8 = new Cryptoanimal();
    cryptoanimal8.animal_id = 8;
    cryptoanimal8.name = "Crypto Koala";
    cryptoanimal8.img = "../../assets/imgs/cryptokoala.gif";
    

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
    // this.firstName = this.navParams.get("firstName");
    // this.lastName = this.navParams.get("lastName");
    // this.email = this.navParams.get("email");
    // this.password = this.navParams.get("password");

    //this.token = localStorage.getItem("TOKEN");
    //console.log(profile token: ", this.token);
    //Comment out getting the navParams email and password


    setTimeout(() => {
      this.appRef.tick();
    }, 1000);
    


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

  navigateToCryptoanimal(cryptoanimal: Cryptoanimal) {
    this.navCtrl.push(CryptoanimalPage, {
        user: this.user,
        cryptoanimal: cryptoanimal

    }
  );

  }

  
}
   