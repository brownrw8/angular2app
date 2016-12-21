import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "My Title";
  alerts = [
    {title:'First alert',content:'Some content',type:'info'},
    {title:'Second alert',content:'Some content',type:'warning'},
    {title:'Third alert',content:'Some content',type:'success'},
    {title:'Another alert',content:'Some content',type:'danger'},
    {title:'Yet another alert',content:'Some content',type:'info'}
  ];
  navLinks = [
    {title: 'A link', href: '#'},
    {title: 'Another link', href: '#'},
    {title: 'A third link', href: '#'}
  ];

  constructor(){
    this.title = "App Title";
  }

  registerAlertClicked(evt){
    console.log(evt);
  }
}
