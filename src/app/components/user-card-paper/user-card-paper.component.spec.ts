import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardPaperComponent } from './user-card-paper.component';

describe('UserCardPaperComponent', () => {
  let component: UserCardPaperComponent;
  let fixture: ComponentFixture<UserCardPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
