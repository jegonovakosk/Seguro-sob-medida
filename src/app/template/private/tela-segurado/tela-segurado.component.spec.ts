import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSeguradoComponent } from './tela-segurado.component';

describe('TelaSeguradoComponent', () => {
  let component: TelaSeguradoComponent;
  let fixture: ComponentFixture<TelaSeguradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaSeguradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
