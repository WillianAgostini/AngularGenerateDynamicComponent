import {
  ViewChild,
  Component,
  OnInit,
  ViewContainerRef,
  ComponentRef
} from "@angular/core";
import { TabService } from "./tab.service";
import { ChildComponent } from "../child/child.component";
import { AnotherChildComponent } from "../another-child/another-child.component";
import { PapelComponent } from "../papel/papel.component";
import { AlgumaCoisaComponent } from "../alguma-coisa/alguma-coisa.component";
import { TabModel } from "./tab.model";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @ViewChild("parent", { read: ViewContainerRef })
  parent: ViewContainerRef;

  instanceOfComponents = new Array<TabModel>();
  constructor(private tabService: TabService) {
    this.tabService.setReference(this);
  }

  ngOnInit() {
    // this.instanceOfComponents.push(
    //   new TabModel(
    //     this.tabService.generateComponent(ChildComponent)
    //   )
    // );
  }

  createTab(component) {
    let tabModel = new TabModel(this.tabService.generateComponent(component));
    this.instanceOfComponents.push(tabModel);
    this.tabClickSelect(tabModel);
  }

  openChild() {
    this.createTab(ChildComponent);
  }

  openAnotherChild() {
    this.createTab(AnotherChildComponent);
  }

  openPapel() {
    this.createTab(PapelComponent);
  }

  openAlgumaCoisa() {
    this.createTab(AlgumaCoisaComponent);
  }

  tabClickRemove(component: TabModel) {
    let componentToDestroy = this.instanceOfComponents.find(
      x => x.index === component.index
    );
    componentToDestroy.component.destroy();
    this.instanceOfComponents = this.instanceOfComponents.filter(
      x => x.index !== component.index
    );
  }

  tabClickSelect(component: TabModel) {
    this.instanceOfComponents.forEach(x => {
      x.component.location.nativeElement.setAttribute("hidden", "true");
    });

    let componentToShow = this.instanceOfComponents.find(
      x => x.index === component.index
    );
    componentToShow.component.location.nativeElement.removeAttribute("hidden");
  }
}
