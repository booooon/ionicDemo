import {Component} from '@angular/core';
import {NavController,Loading,Alert,Toast,Modal,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/register.html'
})

export class Register {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }



}
