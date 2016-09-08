import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {Usercenter} from '../contact/usercenter';

import {Tabs,App} from 'ionic-angular';
import {Injectable, ViewChild} from '@angular/core';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = Usercenter;
  }

  ionViewDidEnter() {
    this.tabRef.select(0);
  }

}

