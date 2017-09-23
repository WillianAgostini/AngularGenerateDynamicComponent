import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { TabComponent } from "./tab.component";
import { TabModel } from "./tab.model";

@Injectable()
export class TabService {
  tabComponent: TabComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createTab(component, tabName) {
    let tabModel = new TabModel(this.generateComponent(component), tabName);
    tabModel.component.instance["_id"] = tabModel.id;
    this.tabComponent.instanceOfComponents.push(tabModel);
    this.tabComponent.tabClickSelect(tabModel);
  }

  setReference(tabComponent) {
    this.tabComponent = tabComponent;
  }

  generateComponent(component) {
    const componentResolved = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    let instance = this.tabComponent.parent.createComponent(componentResolved);
    // instance.instance["testes"] = "valor Injetado";
    return instance;
  }
}
