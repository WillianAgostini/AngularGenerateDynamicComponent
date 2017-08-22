import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { AnotherChildComponent } from "./another-child/another-child.component";
import { AlgumaCoisaComponent } from "./alguma-coisa/alguma-coisa.component";
import { PapelComponent } from "./papel/papel.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app works!";

  @ViewChild("parent", { read: ViewContainerRef })
  parent: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(
      ChildComponent
    );
    const anotherChildComponent = this.componentFactoryResolver.resolveComponentFactory(
      AnotherChildComponent
    );
    console.log(childComponent);
    setTimeout(() => {
      // at this point we want the "child" component to be rendered into the app.component:
      this.parent.createComponent(childComponent);

      setTimeout(() => {
        // at this point we want the "another-child" component to be rendered into the app.component:
        this.parent.createComponent(anotherChildComponent);
      }, 1000);
    }, 1000);
  }

  openChild() {
    this.generateComponent(ChildComponent);
  }
  openAnotherChild() {
    this.generateComponent(AnotherChildComponent);
    
  }
  openAlgumaCoisa() {
    this.generateComponent(AlgumaCoisaComponent);
    
  }
  openPapel() {
    this.generateComponent(PapelComponent);
    
  }

  generateComponent(component) {
    const componentResolved = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    this.parent.createComponent(componentResolved);
  }
}
