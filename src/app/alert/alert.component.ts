import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  inputs: ['title', 'content', 'type'],
  outputs: ['removeEvent']
})
export class AlertComponent implements OnInit {
  public title:string = 'Generic Title';
  public content:string = 'Generic Content';
  public type:string = 'info';
  public visible:boolean = true;

  public removeEvent:EventEmitter<any> = new EventEmitter();

  public componentUid:string;

  constructor() {
    this.componentUid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }());
  }

  ngOnInit() {
  }

  remove(evt){
    this.removeEvent.emit({
      componentUid:this.componentUid
    });
  }

}
