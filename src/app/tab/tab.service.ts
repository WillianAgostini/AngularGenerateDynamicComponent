import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { TabComponent } from "./tab.component";

@Injectable()
export class TabService {
  tabComponent: TabComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  setReference(tabComponent) {
    this.tabComponent = tabComponent;
  }

  generateComponent(component) {
    const componentResolved = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    let instance = this.tabComponent.parent.createComponent(componentResolved);
    // instance.instance["testes"] = "valor Injetado";
  }
}
