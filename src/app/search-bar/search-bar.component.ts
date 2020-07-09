import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchLine: string = '';

  @Output() submittedSearchLine = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submittedSearchLine.emit(this.searchLine);
  }

}
