import {Component} from '@angular/core';
import {NavController,Loading,Alert,Toast,Modal} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';
import {ContactPage} from '../contact/contact'

@Component({
  templateUrl: 'build/pages/contact/usercenter.html'
})

export class Usercenter {

  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
    if(LocalStorage.Logined=="true"){
      //判断是否登录
    }else{
      let modal = Modal.create(ContactPage);
      this.navCtrl.present(modal);
    }

  }
  logout(){
    LocalStorage.username = "";
    LocalStorage.Logined = "";
    let modal = Modal.create(ContactPage);
    this.navCtrl.present(modal);
  }

}
