import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {

  public num: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
