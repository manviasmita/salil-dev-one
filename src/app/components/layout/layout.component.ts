import { Component, OnInit } from '@angular/core';
import {items} from './item';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public columns: any[];
  public hero : any[];
  showMenu : boolean = false ;
  
  constructor() {
     this.columns = items;     
      console.log(this.columns);      
    }

  ngOnInit() {
  }
  selectedSubHeader(){
    alert('router name is captured , routing is pending');
  }
  show(key){
    key.expand = !key.expand ;
    console.log(this.columns);
    
    // this.showMenu= !this.showMenu ;
  }
  showNavAd(){

  }

  showNavOP(){

  }

  showNavRe(){

  }

}
