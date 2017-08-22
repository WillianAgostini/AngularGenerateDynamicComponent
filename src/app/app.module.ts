import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PapelComponent } from './papel/papel.component';
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
    
  ],
  providers: [],
  entryComponents: [AppComponent, ChildComponent, AnotherChildComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}