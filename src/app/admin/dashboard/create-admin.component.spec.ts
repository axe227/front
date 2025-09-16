import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminComponent } from '../../create-admin/creat-admi.component'; // corrigé (chrinore)

describe('CreateAdminComponent', () => {
  // corrigé (chrinore)
  let component: CreateAdminComponent; // corrigé (chrinore)
  let fixture: ComponentFixture<CreateAdminComponent>; // corrigé (chrinore)

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
