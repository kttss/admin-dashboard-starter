import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
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
    MatListModule,
    MatExpansionModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
