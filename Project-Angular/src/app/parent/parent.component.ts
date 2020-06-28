import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
vote = 0;
  constructor() { }

  ngOnInit(): void {
  }
voteCount(value){
    this.vote = value;
}
}
