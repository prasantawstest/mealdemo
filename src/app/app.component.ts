import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name1 : string;
  title = 'mealdemo';
  constructor(){
    this.name1 = "Hello";
   
  }
}
