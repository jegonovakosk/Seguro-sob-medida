import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tela-seguradora',
  templateUrl: './tela-seguradora.component.html',
  styleUrls: ['./tela-seguradora.component.scss']
})
export class TelaSeguradoraComponent implements OnInit {
  ngOnInit(): void {

  }

  showClient: boolean = false;
  showProposta: boolean = false;

  displayedColumns: string[] = ['position', 'name', 'documento', 'contato'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  displayedColumnsProposta: string[] = ['position', 'name', 'documento', 'contato'];
  dataSourceProposta = new MatTableDataSource<Proposta>(ELEMENT_DATA_PROPOSTA);

  @ViewChild(MatPaginator) paginator: MatPaginator;





  showClientModel() {
    if (this.showProposta === true) {
      this.showProposta = !this.showProposta;
    }
    this.showClient = !this.showClient;
  }
  showPropostaModel() {
    if (this.showClient === true) {
      this.showClient = !this.showClient;
    }
    this.showProposta = !this.showProposta;
  }

  // troca de pagina 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  documento: string;
  contato: string;

}
export interface Proposta {
  name: string;
  position: number;
  documento: string;
  contato: string;

}

// elementos de da tabela
const ELEMENT_DATA_PROPOSTA: Proposta[] = [
  { position: 1, name: 'Hydrogen', documento: '600', contato: '(00) 0000-0000', },
  { position: 2, name: 'Helium', documento: '300', contato: '(00) 0000-0000', },
  { position: 3, name: 'Lithium', documento: '250', contato: '(00) 0000-0000', },
  { position: 4, name: 'Beryllium', documento: '900', contato: '(00) 0000-0000', },
  { position: 5, name: 'Boron', documento: '800', contato: '(00) 0000-0000', },
  { position: 6, name: 'Carbon', documento: '500', contato: '(00) 0000-0000', },
  { position: 7, name: 'Nitrogen', documento: '750', contato: '(00) 0000-0000', },
];
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 2, name: 'Helium', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 3, name: 'Lithium', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 4, name: 'Beryllium', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 5, name: 'Boron', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 6, name: 'Carbon', documento: '755.707.730-02', contato: '(00) 0000-0000', },
  { position: 7, name: 'Nitrogen', documento: '755.707.730-02', contato: '(00) 0000-0000', },
];


