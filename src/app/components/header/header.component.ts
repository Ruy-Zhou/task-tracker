import { Component } from '@angular/core';
import { AddTaskBtn } from "../add-task-btn/add-task-btn";

@Component({
  selector: 'app-header',
  imports: [AddTaskBtn],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {

}
