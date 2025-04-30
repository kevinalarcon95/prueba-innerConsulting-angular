import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterDetailComponent } from './charter-detail.component';

describe('CharterDetailComponent', () => {
  let component: CharterDetailComponent;
  let fixture: ComponentFixture<CharterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharterDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
