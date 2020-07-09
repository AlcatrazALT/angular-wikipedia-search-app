import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-result-list',
  templateUrl: './page-result-list.component.html',
  styleUrls: ['./page-result-list.component.css']
})
export class PageResultListComponent implements OnInit {

  @Input() wikiPages = [];
  constructor() { }

  ngOnInit(): void {
  }

}
