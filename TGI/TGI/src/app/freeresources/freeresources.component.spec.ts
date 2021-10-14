import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeresourcesComponent } from './freeresources.component';

describe('FreeresourcesComponent', () => {
  let component: FreeresourcesComponent;
  let fixture: ComponentFixture<FreeresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
