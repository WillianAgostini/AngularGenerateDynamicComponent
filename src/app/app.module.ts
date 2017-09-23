import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ComponentFactoryResolver, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabComponent } from "./tab/tab.component";
import { TabService } from "./tab/tab.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TeacherComponent } from "./teacher/teacher.component";
import { StudentComponent } from "./student/student.component";

@NgModule({
  declarations: [TabComponent, StudentComponent, TeacherComponent],
  imports: [BrowserModule, CommonModule, NgbModule.forRoot()],
  providers: [TabService],
  entryComponents: [StudentComponent, TeacherComponent],
  bootstrap: [TabComponent]
})
export class AppModule {}
