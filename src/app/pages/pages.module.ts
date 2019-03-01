import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './layouts/container/container.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { SidebarContainerComponent } from './layouts/sidebar-container/sidebar-container.component';
import { SidebarMenuComponent } from './layouts/sidebar-menu/sidebar-menu.component'; 

@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent,
    ContainerComponent,
    ToolbarComponent,
    SidebarContainerComponent,
    SidebarMenuComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
