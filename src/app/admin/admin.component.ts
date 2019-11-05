import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'admin'
    }
  ],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
