import { Component, OnInit } from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';

@Component({
  selector: 'app-dictonary-page',
  templateUrl: './dictonary-page.component.html',
  styleUrls: ['./dictonary-page.component.css']
})
export class DictonaryPageComponent implements OnInit {
listWord: IWord[] = [];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
  }

}
