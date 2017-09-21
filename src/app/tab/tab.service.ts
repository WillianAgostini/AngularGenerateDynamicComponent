import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { TabComponent } from "./tab.component";

@Injectable()
export class TabService {
  tabComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  setReference(tabComponent) {
    this.tabComponent = tabComponent;
  }

  generateComponent(component) {
    const componentResolved = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    let instance = this.tabComponent.viewContainer.createComponent(componentResolved);
    // instance.instance["testes"] = "valor Injetado";
  return instance;
  }
}
