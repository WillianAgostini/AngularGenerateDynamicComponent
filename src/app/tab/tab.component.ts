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

  openChild() {
    this.instanceOfComponents.push(
      new TabModel(this.tabService.generateComponent(ChildComponent))
    );
  }

  openAnotherChild() {
    this.instanceOfComponents.push(
      new TabModel(this.tabService.generateComponent(AnotherChildComponent))
    );
  }

  openPapel() {
    this.instanceOfComponents.push(
      new TabModel(this.tabService.generateComponent(PapelComponent))
    );
  }

  openAlgumaCoisa() {
    this.instanceOfComponents.push(
      new TabModel(this.tabService.generateComponent(AlgumaCoisaComponent))
    );
  }

  tabClick(component: TabModel) {
    let componentToDestroy = this.instanceOfComponents.find(
      x => x.index === component.index
    );
    componentToDestroy.component.destroy();
    this.instanceOfComponents = this.instanceOfComponents.filter(
      x => x.index !== component.index
    );
  }
}
