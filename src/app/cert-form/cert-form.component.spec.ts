import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertFormComponent } from './cert-form.component';

describe('CertFormComponent', () => {
  let component: CertFormComponent;
  let fixture: ComponentFixture<CertFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertFormComponent]
    });
    fixture = TestBed.createComponent(CertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
