import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicioComponent } from './tela-inicio.component';

describe('TelaInicioComponent', () => {
  let component: TelaInicioComponent;
  let fixture: ComponentFixture<TelaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
