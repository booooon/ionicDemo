import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Details} from '../about/detail'

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

public list = this.getData();

 constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  getData(){
    let list = [];
    list.push({
      id : '1',
      name : '小浣熊',
      description : 'MeMeda',
      date : 'pm.2:30',
      tel :'1300000'
      });
    list.push({
      id : '2',
      name : '长草君',
      description : 'dudulu',
      date : 'pm.2:30',
      tel :'1300002'
      });
    list.push({
      id : '3',
      name : '萌萌的',
      description : '感觉自己萌萌哒',
      date : 'pm.2:50',
      tel :'1300003'
      });
    return list;
  }

  itemClick(event,item){
    //lert(item.name);
    //再点击的时候出现详细的页面
    this.navCtrl.push(Details,{item:item});
  }
/**
  onPageLoaded(){
    console.log("page 1 page loaded");
  }

  onPageWillEnter(){
    //在这里可以做页面初始化
    console.log("page 1 : page will enter");
  }

  onPageDidEnter(){
    console.log("page 1 : page did enter");
  }

  onPageWillLeave(){
    console.log("page 1 : page will leave");
  }

  onPageDidLeave(){
    console.log("page 1 : page did leave");
  }

  onPageWillUnload(){
    //从DOM中移除的时候执行的生命周期
  }
  onPageDidUnload(){
    //从DOM中移除执行完成的时候
  }**/

}
