import { ComponentRef } from "@angular/core";

export class TabModel {
  component: ComponentRef<{}>;
  index = Math.random();

  constructor(component) {
    this.component = component;
    
  }
}
