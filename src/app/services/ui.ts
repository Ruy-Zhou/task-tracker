import { Injectable, OnInit, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ui {
  private show = false;
  private subject = new Subject()

  toggleShow() {
    this.show = !this.show
    this.subject.next(this.show)
  }

  onToggleShow(): Observable<any> {
    return this.subject.asObservable()
  }
}
