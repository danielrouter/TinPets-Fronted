import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdopcionesComponent } from './tabla-adopciones.component';

describe('TablaAdopcionesComponent', () => {
  let component: TablaAdopcionesComponent;
  let fixture: ComponentFixture<TablaAdopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAdopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
