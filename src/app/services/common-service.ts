import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  http = inject(HttpClient)
  private apiToTree = 'http://localhost:5000/treeItems'

  getTreeItems(): Observable<TreeItem[]> {
    return this.http.get<TreeItem[]>(this.apiToTree)
  }
}
