import { Component, OnInit } from "@angular/core";
import { TabService } from "../tab/tab.service";
import { TeacherComponent } from "../teacher/teacher.component";
import { StudentComponent } from "../student/student.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.openTeacher();
  }

  openStudent() {
    this.tabService.createTab(StudentComponent, "Aluno");
  }

  openTeacher() {
    this.tabService.createTab(TeacherComponent, "Professor");
  }
}
