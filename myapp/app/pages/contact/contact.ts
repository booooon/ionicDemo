import {Component} from '@angular/core';
import {NavController,Loading,Alert,Toast,Modal} from 'ionic-angular';
import {Register} from '../contact/register';
import { ImagePicker } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/contact/contact.html'
})

export class ContactPage {

  public user={
    username : '',
    password : '',
    headface : 'images/1.jpg'
  }

  constructor(private navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }


//  onPageWillEnter(){
    //在这里可以做页面初始化
//    console.log("page 2 : page will enter");
//  }

//  onPageDidEnter(){
//    console.log("page 2 : page did enter");
//  }
  login(){
    if(this.user.username==''|| this.user.username.length<=3){
      //alert 提醒用户注意用户名的正确性
      //let alertUserNameError = Alert.create({
      //  title: "用户中心",
      //  subTitle: "输入正确用户名格式",
      //  buttons: ["OK"]
      //  });
      //this.navCtrl.present(alertUserNameError);

      //使用 toast 控件进行更加优雅的提示
      let toast = Toast.create({
          message : "格式不正确",
          duration : 3000
        });
      this.navCtrl.present(toast);
    }else{
    //创建 loading 窗口，模拟3秒后登陆成功， loading窗口消失
    //console.log(this.user.username);
      let loading = Loading.create({
        //content: "正在登陆...",
        duration: 3000,
        spinner: "dots",
        //dismissOnPageChange: true
      });
      this.navCtrl.present(loading);

      //真是的逻辑是请求登陆API

      if(this.user.password == "1"){
        LocalStorage.username = this.user.username;
        LocalStorage.Logined = "true";
        setTimeout(()=>{
          loading.dismiss();
        },1000);
      }else{
        let toast = Toast.create({
          message : "登录失败",
          duration : 3000
        });
      this.navCtrl.present(toast);
      }

      //alert(this.user.username);
      console.log(this.user.password);
    }
  }
  openRegisterPage(){
    let modal = Modal.create(Register);
    this.navCtrl.present(modal);
  }
  //用户上传头像图片
  uploadImage(){
    let options = {maximumImagesCount: 1};
    ImagePicker.getPictures(options).then((results)=>{
      for(var i=0;i<results.length; i++){
        this.user.headface = results[i];
      }
    });
  }
}
