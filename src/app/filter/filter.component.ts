import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

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
