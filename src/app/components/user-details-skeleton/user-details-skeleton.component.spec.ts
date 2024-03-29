import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsSkeletonComponent } from './user-details-skeleton.component';

describe('UserDetailsSkeletonComponent', () => {
  let component: UserDetailsSkeletonComponent;
  let fixture: ComponentFixture<UserDetailsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
