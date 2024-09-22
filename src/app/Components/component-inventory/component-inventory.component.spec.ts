import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInventoryComponent } from './component-inventory.component';

describe('ComponentInventoryComponent', () => {
  let component: ComponentInventoryComponent;
  let fixture: ComponentFixture<ComponentInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
