import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavHeader = false ;
  panelOpenState = false;
  
  constructor(private router : Router){
    
  }
  showNav(){
    this.showNavHeader = true ;
  }
  selectTab(){
    this.showNavHeader = false ;
    this.router.navigateByUrl('Customer')
    alert('routing code is about to come');
    
  }
}
