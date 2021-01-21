import { Component, OnInit } from '@angular/core';
import { IColaborador } from '../model/IColaborador';
import { ColaboradorService } from '../service/colaborador.service';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {

  colaboradores: Array<IColaborador> = [];

  pageInfo: any = {
    pageSize: 20,
    rowsPerPage: [10, 20, 30, 40, 50, 100]
  };

  totalElements = 0;

  totalPages = 0;

  constructor(private colabordorService: ColaboradorService) {}

  ngOnInit(): void {
    this.colabordorService.findAll().toPromise().then(response => {
      this.colaboradores = response.content;
      this.totalElements = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

}
