import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

import { Observable } from 'rxjs';
import { MatList } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('categoryTrigger', [
      state('active', style({transform: 'scale(2)'})),
      transition('inactive => active', [
        animate(200)
      ]),
      transition('active => inactive', [
        animate(0)
      ]),
      state('inactive', style({transform: 'scale(1)'}))
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'inactive';
  positionY = 100;
  deltaY = 0;

  constructor(private scrollDispather: ScrollDispatcher) { }

  ngOnInit() {
  }

  scrollHandler($event) {
    console.log($event);
    if($event.deltaY < 1 && this.positionY <= 100) {
      this.positionY++;
    }
    else if($event.deltaY > 1 && this.positionY >= 10) {
      this.positionY--;
    }
  }

  panup($event) {
    console.log($event);
    if(this.positionY >= 10) {
      this.positionY -= 0.2;
    }
  }

  pandown($event) {
    if(this.positionY <= 100) {
      this.positionY += 0.2;
    }
  }

  setActive() {
    this.state = 'active';
  }

  setInactive() {
    this.state = 'inactive';
  }

  reroute() {

  }

}
