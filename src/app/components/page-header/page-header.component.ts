import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() headerdata: {title: string; description: string; cta: string};

  constructor() { }

  ngOnInit(): void {
  }

}
