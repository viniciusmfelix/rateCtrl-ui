import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ColaboradorComponent } from './colaborador.component';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';

import { ColaboradorService } from './service/colaborador.service';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    ColaboradorComponent,
    ColaboradorListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
  ],
  exports: [
    ColaboradorComponent,
  ],
  providers: [
    ColaboradorService,
  ],
})
export class ColaboradorModule {}
