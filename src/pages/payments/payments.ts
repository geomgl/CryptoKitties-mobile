// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { PortfolioPage } from '../portfolio/portfolio';
// import { ProfilePage } from '../profile/profile';
// import { Paymentmethod } from '../../models/paymentMethod';
// import { Charity } from '../../models/charity';
// import { User } from '../../models/user';
// import { Donation } from '../../models/donation';

// /**
//  * Generated class for the PaymentsPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-payments',
//   templateUrl: 'payments.html',
// })
// export class PaymentsPage {

//   public user: User = new User();
//   public charity: Charity = new Charity();
//   public amount: number;
//   public count: number;


//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     this.user = this.navParams.get("user");
//     this.charity = this.navParams.get("charity");

//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad PaymentsPage');
//   }
//   navigateToProfile() {
//     this.navCtrl.push(ProfilePage);

//   }

//   navigateToPortfolio() {
//     this.navCtrl.push(PortfolioPage, {
//       user: this.user,
//       charity: this.charity,
//       amount: this.amount,
//       count: 1,
//     });

//   }


// }

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var Stripe;

@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  stripe = Stripe('pk_test_3As33OxveQ1MQCw9j2CEmXtj');
  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.setupStripe();
  }

  setupStripe(){
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.card = elements.create('card', { style: style });

    this.card.mount('#card-element');

    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();

      // this.stripe.createToken(this.card)
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
        }
      });
    });
  }

}
