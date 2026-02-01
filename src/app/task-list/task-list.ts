import { Component, inject, OnInit, signal } from '@angular/core';
import { AddTask } from "./components/add-task/add-task";
import { TaskItem } from "./components/task-item/task-item";
import { Tasks } from '../services/tasks';
import { Ui } from '../services/ui';

@Component({
  selector: 'app-task-list',
  imports: [AddTask, TaskItem],
  templateUrl: './task-list.html',
  styleUrl: './task-list.less',
})
export class TaskList implements OnInit {
  protected tasks = signal<Task[]>([])
  protected apiService = inject(Tasks)
  protected showAddTask = signal(false)
  private uiService = inject(Ui)

  ngOnInit(): void {
    // fetch all Task
    this.apiService.getTasks().subscribe((tasks) => this.tasks.set(tasks))
    // subscribe the ui state to toggle task form 
    this.uiService.onToggleShow().subscribe(state => {
      this.showAddTask.set(state)
    })
  }

  addTaskToList(task: Task) {
    this.tasks.update((tasks) => [...tasks, task])
  }

  removeTask(task: Task) {
    this.tasks.update((tasks) => tasks.filter(t => t.id !== task.id))
  }
}
