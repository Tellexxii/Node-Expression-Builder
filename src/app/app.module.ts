import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NodeExpressionBuilderModule} from "./node-expression-builder/node-expression-builder.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NodeExpressionBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
