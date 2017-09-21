import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ComponentFactoryResolver, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { PapelComponent } from "./papel/papel.component";
import { ChildComponent } from "./child/child.component";
import { AnotherChildComponent } from "./another-child/another-child.component";
import { AlgumaCoisaComponent } from "./alguma-coisa/alguma-coisa.component";
import { TabComponent } from "./tab/tab.component";
import { TabService } from "./tab/tab.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdTabsModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent,
    PapelComponent,
    AlgumaCoisaComponent,
    TabComponent
  ],
  imports: [BrowserModule, CommonModule, BrowserAnimationsModule, MdTabsModule],
  providers: [TabService],
  entryComponents: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent,
    PapelComponent,
    AlgumaCoisaComponent
  ],
  bootstrap: [TabComponent]
})
export class AppModule {}
