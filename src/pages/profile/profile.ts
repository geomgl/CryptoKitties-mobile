import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicApp } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharitiesPage } from '../charities/charities';
import { PaymentsPage } from '../payments/payments';
import { PortfolioPage } from '../portfolio/portfolio';
import Chart from 'chart.js';

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

// portfolio = ProfilePage;
// charities = CharitiesPage;

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = "logo-octocat";
  }

  ionViewDidLoad() {
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
    this.username = this.navParams.get("username");
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
    this.navCtrl.push(HomePage);

  }
  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  navigateToPayments() {
    this.navCtrl.push(PaymentsPage);

  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage);

  }
  
}
   