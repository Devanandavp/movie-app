import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpgComponent } from './adminpg.component';

describe('AdminpgComponent', () => {
  let component: AdminpgComponent;
  let fixture: ComponentFixture<AdminpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminpgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
