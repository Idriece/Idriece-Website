import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component'
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ ToolbarComponent, NavigationComponent, SidenavComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent,
    NavigationComponent,
    SidenavComponent
  ]
})
export class CoreModule { }
