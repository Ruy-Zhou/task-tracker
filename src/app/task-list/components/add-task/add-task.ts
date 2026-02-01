import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Tasks } from '../../../services/tasks';
import { FormsModule } from '@angular/forms';
import { Ui } from '../../../services/ui';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.less',
})
export class AddTask {
  @Output() onAddTask = new EventEmitter()
  
  private apiService = inject(Tasks)
  private uiService = inject(Ui)
  protected text = signal('')
  protected date = signal('')
  protected reminder = signal(false)


  addTask() {
    const task: Task = {
      text: this.text(),
      date: this.date(),
      reminder: this.reminder()
    }

    this.apiService.addTask(task).subscribe((task) => {
      this.onAddTask.emit(task)
    })

    this.resetForm()

    this.uiService.toggleShow()
  }

  resetForm() {
    this.text.set('')
    this.date.set('')
    this.reminder.set(false)
  }
}
