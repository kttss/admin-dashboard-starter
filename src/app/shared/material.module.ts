import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [
    // MatToolbarModule,
    // MatIconModule

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule, 
    MatListModule
  ]
})
export class MaterialModule { }
