import { Component, inject, OnInit } from '@angular/core';
import { Ui } from '../../services/ui';

@Component({
  selector: 'app-add-task-btn',
  imports: [],
  templateUrl: './add-task-btn.html',
  styleUrl: './add-task-btn.less',
})
export class AddTaskBtn implements OnInit {
  private uiService = inject(Ui)
  protected showAddTask = false
  
  ngOnInit(): void {
    this.uiService.onToggleShow().subscribe((state: boolean) => {
      this.showAddTask = state
    })
  }

  toggleAddTask() {
    this.uiService.toggleShow()
  }
  
}
