import { BrowserModule } from '@angular/platform-browser';
import { Directive, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DirecDirective } from './direc.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DirecDirective
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
