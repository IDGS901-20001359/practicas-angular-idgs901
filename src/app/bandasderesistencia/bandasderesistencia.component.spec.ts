import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandasderesistenciaComponent } from './bandasderesistencia.component';

describe('BandasderesistenciaComponent', () => {
  let component: BandasderesistenciaComponent;
  let fixture: ComponentFixture<BandasderesistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandasderesistenciaComponent]
    });
    fixture = TestBed.createComponent(BandasderesistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
