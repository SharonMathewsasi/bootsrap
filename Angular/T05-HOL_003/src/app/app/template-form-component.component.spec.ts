import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponentComponent } from './template-form-component.component';

describe('TemplateFormComponentComponent', () => {
  let component: TemplateFormComponentComponent;
  let fixture: ComponentFixture<TemplateFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
