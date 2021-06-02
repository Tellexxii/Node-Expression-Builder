import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeExpressionBuilderComponent} from "./node-expression-builder.component";


@NgModule({
  declarations: [NodeExpressionBuilderComponent],
  imports: [
    CommonModule
  ],
  exports: [NodeExpressionBuilderComponent]
})
export class NodeExpressionBuilderModule {
}
