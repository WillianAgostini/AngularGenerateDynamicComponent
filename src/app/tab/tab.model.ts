import { ComponentRef } from "@angular/core";

export class TabModel {
  component: ComponentRef<{}>;
  id = Math.random();
  tabName = '';
  constructor(component, tabName) {
    this.component = component;
    this.tabName = tabName;
  }
}
