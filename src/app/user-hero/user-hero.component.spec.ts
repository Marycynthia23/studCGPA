import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroComponent } from './user-hero.component';

describe('UserHeroComponent', () => {
  let component: UserHeroComponent;
  let fixture: ComponentFixture<UserHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
