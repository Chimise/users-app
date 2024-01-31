import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardskeletonComponent } from './usercardskeleton.component';

describe('UsercardskeletonComponent', () => {
  let component: UsercardskeletonComponent;
  let fixture: ComponentFixture<UsercardskeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercardskeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercardskeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
