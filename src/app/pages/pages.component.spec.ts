import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ContainerComponent } from './layouts/container/container.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { SidebarMenuComponent } from './layouts/sidebar-menu/sidebar-menu.component';
import { SidebarContainerComponent } from './layouts/sidebar-container/sidebar-container.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesComponent,ContainerComponent,ToolbarComponent,SidebarContainerComponent,SidebarMenuComponent ],
      imports:[
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
