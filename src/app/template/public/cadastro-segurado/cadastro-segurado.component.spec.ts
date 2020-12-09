import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSeguradoComponent } from './cadastro-segurado.component';

describe('CadastroSeguradoComponent', () => {
  let component: CadastroSeguradoComponent;
  let fixture: ComponentFixture<CadastroSeguradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSeguradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
