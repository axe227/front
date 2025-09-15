import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VignetteDetailComponent } from './vignette-detail.component';

describe('VignetteDetailComponent', () => {
  let component: VignetteDetailComponent;
  let fixture: ComponentFixture<VignetteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VignetteDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VignetteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
