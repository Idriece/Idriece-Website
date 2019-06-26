import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  opened = false;

  constructor() { }

  public getOpened() {
    return this.opened;
  }

  public toggleSideNav() {
    console.log(this.opened)
    switch(this.opened) {
      case true: {
        this.opened = false;
        break;
      }
      case false: {
        this.opened = true;
        break;
      }
    }
    console.log(this.opened)
  }
}
