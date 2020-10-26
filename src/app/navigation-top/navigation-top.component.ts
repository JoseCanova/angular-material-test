import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavigationTopComponent implements OnInit {
   
 collapsed = true;
   
  active=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){ 
	this.active = !this.active;
  }
  menuOpened(){ 
	this.active=true;	
  }
  menuClosed(){ 
	this.active=false;
  }

}
