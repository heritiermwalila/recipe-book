import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="alert alert-danger" role="alert">{{ error }}</div>
  `,
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() error: string;

  constructor() {}

  ngOnInit(): void {}
}
