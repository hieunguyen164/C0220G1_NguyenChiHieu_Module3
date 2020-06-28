import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output()
voteSize = new EventEmitter();
counter = 0;
voting(){
  this.counter++;
  this.voteSize.emit(this.counter);
}

  constructor() { }

  ngOnInit(): void {
  }

}
