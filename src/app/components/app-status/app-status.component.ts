import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './app-status.component.html',
  styleUrls: ['./app-status.component.css'],
})
export class AppStatusComponent implements OnInit {
  @Input()
  template: TemplateRef<any>;

  @Input()
  status: 'NOT_STARTED' | 'STARTED' | 'COMPLETE' | 'UNKNOWN';

  constructor() {}

  ngOnInit() {}
}
