import {
  ViewChild,
  Component,
  OnInit,
  ViewContainerRef,
  ComponentRef
} from "@angular/core";
import { TabService } from "./tab.service";
import { TabModel } from "./tab.model";
import { TeacherComponent } from "../teacher/teacher.component";
import { StudentComponent } from "../student/student.component";

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
    this.openTeacher();
  }

  createTab(component) {
    let tabModel = new TabModel(this.tabService.generateComponent(component));
    tabModel.component.instance["_id"] = tabModel.id;
    this.instanceOfComponents.push(tabModel);
    this.tabClickSelect(tabModel);
  }

  tabClickRemove(component: TabModel) {
    let componentToDestroy = this.instanceOfComponents.find(
      x => x.id === component.id
    );
    componentToDestroy.component.destroy();
    this.instanceOfComponents = this.instanceOfComponents.filter(
      x => x.id !== component.id
    );
  }

  tabClickSelect(component: TabModel) {
    this.instanceOfComponents.forEach(x => {
      x.component.location.nativeElement.setAttribute("hidden", "true");
    });

    let componentToShow = this.instanceOfComponents.find(
      x => x.id === component.id
    );
    componentToShow.component.location.nativeElement.removeAttribute("hidden");
  }

  setMyClass(component: ComponentRef<{}>) {
    let className = "nav-link";
    if (component.location.nativeElement.getAttribute("hidden"))
      return className;
    return className + " active";
  }

  openStudent() {
    this.createTab(StudentComponent);
  }

  openTeacher() {
    this.createTab(TeacherComponent);
  }
}
