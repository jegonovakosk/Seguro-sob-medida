import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-segurado',
  templateUrl: './cadastro-segurado.component.html',
  styleUrls: ['./cadastro-segurado.component.scss']
})

export class CadastroSeguradoComponent implements OnInit {
  hide = true;
  seg2 = false;
  seg = false;
  formMode = 'cadastro'

  f = [];


  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  submitCadastro(): void {
    this.router.navigate(['/cadastro-segurado']);

  }

  showSegurado() {
    if (this.seg === true) {
      this.seg = false;
    }
    this.seg2 = !this.seg2;
    console.log()
  }

  showSeguradora() {
    if (this.seg2 === true) {
      this.seg2 = false;
    }
    this.seg = !this.seg;
  }

}
