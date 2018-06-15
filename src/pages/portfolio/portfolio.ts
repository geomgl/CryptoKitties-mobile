import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CharitiesPage } from '../charities/charities';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Charity } from '../../models/charity';
import { Slice } from '../../models/slice';
import { SlicePipe } from '@angular/common';
import { MyCharity } from '../../models/myCharity';
import { Http } from '@angular/http';
import { Donation } from '../../models/donation';

/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {
  icons: string;


    public user: User = new User();
    public charity: Charity = new Charity();
    public technologies: Array<Slice> = [];
    public donation_total: number = 0;
    public donation_count: number = 0;
    public donations: Array<Donation> = [];
  
    
    constructor(public navCtrl: NavController,
      public navParams: NavParams, public http: Http) {
        this.icons = "stats"
      
      this.user = this.navParams.get("user");
      let colorArr: Array<string> = ["rgb(128,0,0)", "rgb(220,20,60)", "rgb(255,0,0)", "rgb(255,127,80)", "rgb(205,92,92)", "rgb(255,165,0)", "rgb(255,215,0)", "rgb(128,128,0)", "rgb(154,205,50)", "rgb(85,107,47)", "rgb(124,252,0)", "rgb(144,238,144)", "rgb(143,188,143)", "rgb(47,79,79)", "rgb(0,139,139)", "rgb(0,255,255)", "rgb(224,255,255)", "rgb(70,130,180)", "rgb(30,144,255)", "rgb(25,25,112)"];
  
      if (this.navParams.get('charity')) {
        this.charity = this.navParams.get('charity');



        let newCharity = new MyCharity();
        newCharity.id = this.charity.charity_id;
        newCharity.name = this.charity.name;
        newCharity.percentage = 0;
  
        this.user.myCharities.push(newCharity);
  


      }
      //Keep going until you hit all of the elements in the array
      for(let i = 0; i < this.user.myCharities.length; i++) {
        let newSlice = new Slice();
        newSlice.technology = this.user.myCharities[i].name;
        newSlice.time = this.user.myCharities[i].percentage;
        newSlice.color = colorArr[i];
        this.technologies.push(newSlice);
      }
    }
  

donation_list() {  this.http
  .get("http://localhost:3000/users/" + this.user.user_id + "/donations") 
  .subscribe (
    Result => {
   // console.log(Result);
    this.donations = Result.json() as Array<Donation>;
    
   for(let i = 0; i < this.donations.length; i++) {
     this.chartLabels = this.donations[i].amount;
   }


    for(let i = 0; i < this.donations.length; i++) {
      this.donation_total += this.donations[i].amount;
      //console.log(this.chartLabels);
      console.log(this.chartValues);
      
    }
    this.donation_count = this.donations.length;
    },
      Error => {
      console.log(Error);
      }
    );  

}

test() {
  console.log(this.donations);
}

    @ViewChild('doughnutCanvas') doughnutChart;
    public chartLabels: any = [];
    public chartValues: any = [];
    public doughnutChartel: any;
    public chartColours: any = [];
    public chartHoverColours: any = [];
    public chartLoadingEl: any;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PortfolioPage');
    this.createDoughnutChart();
    this.donation_list();
    // this.defineChartData();
  }

  update() {
    this.navCtrl.push(PortfolioPage, {
      user: this.user,
      //amount: this.amount
    });
  }


  // defineChartData() {
  //   for(let i = 0; i < this.donations.length; i++) {
  //     this.chartLabels = this.donations[i].charity_id;
  //   }

  //   for(let i = 0; i < this.donations.length; i++) {
  //     this.chartValues = this.donations[i].amount;
  //   }



  // defineChartData(): void {
  //   let k: any;

  //   for (k in this.donations) {
  //     var don = this.donations[k];

  //     this.chartLabels.push(don.charity_id);
  //     this.chartValues.push(don.amount);
  //   }
  // }

  createDoughnutChart() {

    this.doughnutChart = new Chart(this.doughnutChart.nativeElement,
      {
        type: 'doughnut',
        data: {
             labels: ["Giving Back to Africa", "GWC", "Helping Rhinos", "IUCN", "Turtle Conservancy"],
                   datasets: [{
                     label: 'Amount Donated',
                   data: [875, 125, 1000, 200, 275],
          
          
          
          //labels: ["", "GWC", "Helping Rhinos", "IUCN", "Turtle Conservancy"],["", "GWC", "", "IUCN", ""
         // datasets: [{
                     //   label: '# of Votes',
                       // data: [12, 19, 3, 5, 2, 3],
           // data: ["875", "125","1000","200","275"],
            backgroundColor: [
                              'rgba(255, 99, 132)',
                              'rgba(54, 162, 235)',
                              'rgba(255, 206, 86)',
                              'rgba(75, 192, 192)',
                              'rgba(153, 102, 255)'
                          ],
          }]
        },
        options: {
          layout: {
          },
          animation: {
            duration: 5000
          }
        }
      });

    this.chartLoadingEl = this.doughnutChart.generateLegend();
  


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

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);

  }
  

  navigateToCharities() {
    this.navCtrl.push(CharitiesPage);

  }

  navigateToHome() {
    this.navCtrl.push(HomePage);

  }

}
