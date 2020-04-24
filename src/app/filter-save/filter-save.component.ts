import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-save',
  templateUrl: './filter-save.component.html'
})
export class FilterSaveComponent implements OnInit {

  public num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.num++
  }

  decrease(){
    this.num++
  }
}
