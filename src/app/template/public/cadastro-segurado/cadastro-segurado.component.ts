import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';


@Component({
  selector: 'app-cadastro-segurado',
  templateUrl: './cadastro-segurado.component.html',
  styleUrls: ['./cadastro-segurado.component.scss']
})

export class CadastroSeguradoComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }


  hide = true;
  formMode = 'cadastro'

  form = {
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required])
  };

  registerClient(value): void {
    const register = {
      email: this.form.email.value,
      password: this.form.password.value,
      cnpj: this.form.cnpj.value,
      type: this.form.type.value
    }
    register.type = "1";
    this.authService.doRegister(register)
      .subscribe(resp => {
        console.log(resp);
      }, error => {
        console.log(error);
      }
      )
    console.log(register);
  }

  ngOnInit(): void {
  }

  submitCadastro(): void {
    this.router.navigate(['/cadastro-segurado']);

  }
}
