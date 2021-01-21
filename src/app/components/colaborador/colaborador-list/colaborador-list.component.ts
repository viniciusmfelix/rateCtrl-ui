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
    for (let i = 0; i <= 50; i++) {
      const colaborador: IColaborador = {
        id: i,
        nome: 'Vinicius Felix',
        email: 'vinicius.felix@vetorit.com.br',
        cargo: 'Dev Java',
        salario: 10000,
        valorFixo: true,
        dataCriacao: new Date(),
        dataAtualizacao: new Date(),
      };
      this.colaboradores.push(colaborador);
    }
  }

}
