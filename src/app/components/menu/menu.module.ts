import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';

import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    AppRoutingModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {}
