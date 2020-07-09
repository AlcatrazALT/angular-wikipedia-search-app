import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wikiPages = [];

  constructor(private wikiService: WikipediaService) {

  }

  searchUserQuery(searchLine: string) {
    this.wikiService.search(searchLine).subscribe((response) => {
      this.wikiPages = response;
    });
  }
}
