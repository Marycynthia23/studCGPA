import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatecgpaComponent } from './calculatecgpa.component';

describe('CalculatecgpaComponent', () => {
  let component: CalculatecgpaComponent;
  let fixture: ComponentFixture<CalculatecgpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatecgpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatecgpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
