import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  logoPath = 'assets/images/logo.png';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Colaboradores',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.router.navigateByUrl('/colaboradores');
        },
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Projetos',
        icon: 'pi pi-fw pi-chart-line',
      },
      {
        label: 'Faturamento de Projetos',
        icon: 'pi pi-fw pi-wallet',
      },
      {
        label: 'Apurações',
        icon: 'pi pi-fw pi-search',
      },
      {
        label: 'Notas Fiscais',
        icon: 'pi pi-fw pi-copy',
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-fw pi-file-pdf',
      },
    ];
  }

}
