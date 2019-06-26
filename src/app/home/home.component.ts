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
    trigger('scrollTrigger', [
      state('up', style({transform: 'translateY(-5px)'})),
      transition('down => up', [
        animate('700ms')
      ]),
      transition('up => down', [
        animate('700ms')
      ]),
      state('down', style({transform: 'translateY(5px)'}))
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'down';
  positionY = 0;
  topY = 100;
  deltaY = 0;
  isScrolling = false;

  constructor(private scrollDispather: ScrollDispatcher) { }

  @HostListener('window:resize', ['$event'])
    onResize($event) {
      this.positionY = (0 - document.getElementById('menuList').offsetHeight / window.innerHeight * 100);
      this.topY = 100;
      console.log(this.positionY);
      console.log(screen.height);
      this.isScrolling = false;
    }

  ngOnInit() {
    console.log(screen.height + 'menu height' + document.getElementById('menuList').offsetHeight);
    this.positionY = (0 - document.getElementById('menuList').offsetHeight / window.innerHeight * 100);
    console.log(this.positionY);
  }

  scrollHandler($event) {
    //console.log(this.positionY + 'and the screen' + screen.height / 100);
    if($event.deltaY > 1 && this.positionY < 0) {
      console.log(this.positionY);
      this.positionY++;
      this.topY--;
      if(this.topY <= 100) {
        this.isScrolling = true;
      }
      else {
        this.isScrolling = false;
      }
    }
    else if($event.deltaY < 1 && this.topY <= 100) {
      console.log(this.positionY);
      this.positionY--;
      this.topY++;
      if(this.topY <= 100) {
        this.isScrolling = true;
      }
      else {
        this.isScrolling = false;
      }
    }
  }

  panup($event) {
    console.log($event);
    if(this.positionY < 0) {
      this.positionY += 0.5;
      this.topY -= 0.5;
      if(this.topY <= 100) {
        this.isScrolling = true;
      }
      else {
        this.isScrolling = false;
      }
    }
  }

  pandown($event) {
    if(this.positionY <= 100) {
      this.positionY -= 0.5;
      this.topY += 0.5;
      if(this.topY <= 100) {
        this.isScrolling = true;
      }
      else {
        this.isScrolling = false;
      }
    }
  }

  setActive() {
    this.state = 'active';
  }

  setInactive() {
    this.state = 'inactive';
  }

  toggleScroll() {
    switch(this.state) {
      case 'up':
        this.state = 'down';
        break;
      case 'down':
        this.state = 'up';
        break;
    }
  }

  reroute() {

  }

}
