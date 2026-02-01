import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Tasks } from '../../../services/tasks';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.less',
})
export class TaskItem {
  @Input({ required: true }) task: Task | undefined;
  @Output() onRemoveTask = new EventEmitter()
  @Output() onToggleReminder = new EventEmitter()

  private apiService = inject(Tasks)

  removeTask(task?: Task) {
    if (task) {
      this.apiService.removeTask(task).subscribe((task) => {
        this.onRemoveTask.emit(task)
      })
    }
  }

  toggleReminder(task?: Task) {
    if (task) {
      task.reminder = !task.reminder
      this.apiService.updateTask(task).subscribe()
    }
  }
}
