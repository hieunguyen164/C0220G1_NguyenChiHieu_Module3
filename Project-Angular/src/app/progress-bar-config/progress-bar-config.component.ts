import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar-config',
  templateUrl: './progress-bar-config.component.html',
  styleUrls: ['./progress-bar-config.component.css']
})
export class ProgressBarConfigComponent implements OnInit {
color: ThemePalette = 'primary';
mode: ProgressBarMode = 'determinate';
value = 50;
bufferValue = 75;
  constructor() { }

  ngOnInit(): void {
  }

}
