import { Component, OnInit } from '@angular/core';
declare const move: any;
@Component({
  selector: 'app-progress-bar-dynamic',
  templateUrl: './progress-bar-dynamic.component.html',
  styleUrls: ['./progress-bar-dynamic.component.css']
})
export class ProgressBarDynamicComponent implements OnInit {
  onClick(){
    move();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
