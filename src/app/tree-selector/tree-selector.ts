import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-tree-selector',
  imports: [],
  templateUrl: './tree-selector.html',
  styleUrl: './tree-selector.less',
})
export class TreeSelector implements OnInit {
  service = inject(CommonService)
  treeItems = signal<TreeItem[]>([])

  selected = signal<number[]>([])

  ngOnInit(): void {
    this.service.getTreeItems().subscribe((items: TreeItem[]) => {
      this.treeItems.set(items)
    })
  }

  toggleCheck(id: number) {
    const index = this.selected().indexOf(id)
    if (index === -1) {
      this.selected.update((arr) => [...arr, id])
    } else {
      this.selected.update((arr) => {
        arr.splice(index, 1)
        return [...arr]
      })
    }
  }

  getItemCheck(id: number) {
    return this.selected().includes(id)
  }

  getParentCheck(id: number) {
    const selected = this.selected()
    const item = this.treeItems().find(child => child.id === id)
    const filteredLength = item?.children?.filter(child => selected.includes(child.id)).length || 0
    const itemsLength = item?.children?.length || 0

    return filteredLength === itemsLength ? 'blue' : filteredLength !== 0 ? 'orange' : ''
  }

  clickParent(id: number) {
    const item = this.treeItems().find(child => child.id === id)
    const state = this.getParentCheck(id)
    const ids: number[] = item?.children?.map(child => child.id) || []

    switch (state) {
      case 'blue':
      this.selected.update((arr) => arr.filter(id => !ids?.includes(id)))
      break

      case 'orange':
      this.selected.update((arr) => {
        const _arr: number[] = []
        ids?.forEach(id => {
          if (!arr.includes(id)) {
            _arr.push(id)
          }
        })

        return [...arr, ..._arr]
      })
      break

      default:
      this.selected.update((arr) => [...arr, ...ids])
      break
    }
  }
}
