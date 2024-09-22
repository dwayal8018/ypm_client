import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPcBuildComponent } from './custom-pc-build.component';

describe('CustomPcBuildComponent', () => {
  let component: CustomPcBuildComponent;
  let fixture: ComponentFixture<CustomPcBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPcBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPcBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
