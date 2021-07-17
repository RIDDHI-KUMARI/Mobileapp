import { Component } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage  {

  outerslide = '90px';
  outertrans = '1s';
  innerslide = '0vh';
  innertrans = '1s';
  innerpadding = "0px";
  big = "big-img";
  name = localStorage.getItem("name");
  mobile = localStorage.getItem("number")
    constructor() {}
  
    slideUp(){
      this.outerslide = '88vh';
      this.innerslide = '74vh';
      this.innerpadding = '20px';
      this.big = "small-img";
    }
    slideDown(){
      this.outerslide = '90px';
      this.innerslide = '0vh';
      this.innerpadding = '0px';
      this.big = "big-img";
    }
    logout(){
      localStorage.removeItem("name")
      localStorage.removeItem("number")
  
    }
    social(id){
      if(id === 'fb'){
        window.open('https://www.facebook.com/DashBackIndia');
      }
      if(id === 'insta'){
        window.open('https://www.instagram.com/dashbackindia/');
      }
      if(id === 'whatsapp'){
        
      }
    }
  }