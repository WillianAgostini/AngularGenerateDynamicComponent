import { ViewChild, Component, OnInit, ViewContainerRef } from "@angular/core";
import { TabService } from "./tab.service";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.css"]
})
export class TabComponent implements OnInit {
  @ViewChild("parent", { read: ViewContainerRef })
  parent: ViewContainerRef;

  constructor(private tabService: TabService) {
    this.tabService.setReference(this);
  }

  ngOnInit() {}
}
