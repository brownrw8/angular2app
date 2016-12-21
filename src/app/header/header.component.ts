import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['title', 'navLinks']
})
export class HeaderComponent implements OnInit {

  title:string = "No Title";
  navLinks:any = [];

  constructor() {

  }

  ngOnInit() {
  }

}
