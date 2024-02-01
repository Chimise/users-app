import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyCardComponent } from './user-company-card.component';

describe('UserCompanyCardComponent', () => {
  let component: UserCompanyCardComponent;
  let fixture: ComponentFixture<UserCompanyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCompanyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCompanyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
