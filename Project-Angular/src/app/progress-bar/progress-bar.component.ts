import {Component, OnInit} from '@angular/core';
declare const move: any;
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  onClick(){
    move();
  }
  ngOnInit(): void {
  }

}
