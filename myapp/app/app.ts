import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import { Geolocation } from 'ionic-native';
import { LocalNotifications } from 'ionic-native';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      //获取位置信息
      //Geolocation.getCurrentPosition().then((resp)=>{
      //  console.log(resp.coords.latitude);
      //  conTsole.log(resp.coords.longitude);
      //});

      //本地提醒组件
      LocalNotifications.schedule({
        text : "本次提醒",
        at : new Date(new Date().getTime() + 10000),
        sound : null
        });
    });
  }
}

ionicBootstrap(MyApp);
