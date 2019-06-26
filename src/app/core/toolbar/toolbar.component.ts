import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav-service/sidenav.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('menuTrigger', [
      //state('hidden', style({transform: 'scale(0) rotate(90deg)'})),
      state('visible', style({transform: 'scale(1)'})),
      state('void', style({transform: 'scale(1) rotate(90deg)'})),
      transition('visible => hidden', [
        animate(200)
      ]),
      transition('hidden => visible', [
        animate(200)
      ]),
      transition('void => *', [
        animate(200)
      ])
    ])
  ]
})
export class ToolbarComponent implements OnInit {

  constructor(public sideNavService: SidenavService) { }

  menuState = 'visible';
  closeState = 'hidden';
  

  toggleSidenav() {
    this.sideNavService.toggleSideNav();
    switch(this.sideNavService.opened) {
      case true: {
        this.menuState = 'hidden';
        this.closeState = 'visible';
        break;
      }
      case false: {
        this.menuState = 'visible';
        this.closeState = 'hidden';
        break;
      }
    }
  }
  sideNavOpened() {
    return this.sideNavService.getOpened();
  }

  ngOnInit() {
  }

}
