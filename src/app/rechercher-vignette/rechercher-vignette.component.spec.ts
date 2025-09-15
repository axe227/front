import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherVignetteComponent } from './rechercher-vignette.component';

describe('RechercherVignetteComponent', () => {
  let component: RechercherVignetteComponent;
  let fixture: ComponentFixture<RechercherVignetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercherVignetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherVignetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
