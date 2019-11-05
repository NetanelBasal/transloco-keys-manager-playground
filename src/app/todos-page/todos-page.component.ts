import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'todos-page',
        alias: 'todos'
      }
    }
  ],
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  /**
   *
   * t(todos.fromComment)
   */
  getText() {
    return '...';
  }
}
