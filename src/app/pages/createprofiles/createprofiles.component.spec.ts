import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprofilesComponent } from './createprofiles.component';

describe('CreateprofilesComponent', () => {
  let component: CreateprofilesComponent;
  let fixture: ComponentFixture<CreateprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
