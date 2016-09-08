import {Component} from '@angular/core';
import {NavController,Loading,Alert,Toast,Modal,ViewController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/detail.html'
})

export class Details {
  //constructor(private navCtrl: NavController) {
  //  this.navCtrl = navCtrl;
  //}
  item;

  constructor(public params: NavParams){
   // userParams is an object we have in our nav-parameters
   this.item = params.data.item;
 }


}
