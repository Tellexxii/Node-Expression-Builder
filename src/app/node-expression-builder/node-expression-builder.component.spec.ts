import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeExpressionBuilderComponent } from './node-expression-builder.component';

describe('NodeExpressionBuilderComponent', () => {
  let component: NodeExpressionBuilderComponent;
  let fixture: ComponentFixture<NodeExpressionBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeExpressionBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeExpressionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
