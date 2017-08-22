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
export class AppComponent implements OnInit {
  title = "app works!";

  @ViewChild("parent", { read: ViewContainerRef })
  parent: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    setTimeout(() => this.generateComponent(ChildComponent), 1000);
    setTimeout(() => this.generateComponent(AnotherChildComponent), 3000);
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

    let instance = this.parent.createComponent(componentResolved);
    instance.instance["testes"] = "valor Injetado";

    setTimeout(() => instance.destroy(), 3000);
  }
}
