import { ComponentRef } from "@angular/core";

export class TabModel {
  component: ComponentRef<{}>;
  id = Math.random();

  constructor(component) {
    this.component = component;
  }
}
