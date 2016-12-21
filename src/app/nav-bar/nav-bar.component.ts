import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  inputs: ['brand', 'navLinks']
})
export class NavBarComponent implements OnInit {

  public brand:string = 'Some Brand';
  public navLinks:any = [];

  constructor() {

  }

  ngOnInit() {
    console.log(this.navLinks);
  }

}
