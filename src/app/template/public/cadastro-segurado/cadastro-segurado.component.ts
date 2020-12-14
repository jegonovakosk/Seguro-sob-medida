import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-segurado',
  templateUrl: './cadastro-segurado.component.html',
  styleUrls: ['./cadastro-segurado.component.scss']
})

export class CadastroSeguradoComponent implements OnInit {
  hide = false;
  seg = false;
  formMode = 'cadastro'

  f = [];


  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  submitCadastro(): void {
    this.router.navigate(['/cadastro-segurado']);

  }

  showSegurado(value) {
    if (this.seg === true) {
      this.seg = false;
    }
    this.hide = !this.hide;
    console.log(value)
  }

  showSeguradora() {
    if (this.hide === true) {
      this.hide = false;
    }
    this.seg = !this.seg;
  }

}
