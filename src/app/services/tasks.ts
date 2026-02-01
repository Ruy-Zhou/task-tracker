import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:5000/tasks'

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, { headers })
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + '/' + task.id, task, { headers })
  }

  removeTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + '/' + task.id)
  }
 }
