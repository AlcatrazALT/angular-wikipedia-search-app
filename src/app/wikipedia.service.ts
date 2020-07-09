import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';


interface IWikipediaResponce {
  query: {
    search: {
      pageId: string;
      title: string;
      snippet: string;
      timestamp: string;
    }[]
  };
}
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(content: string) {
    return this.http.get<IWikipediaResponce>
      ('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          srsearch: content, //content matching this value
          srlimit: '40', //How many total pages to return.
          format: 'json',
          utf8: '1',
          origin: '*'
        }
      }).pipe(
        pluck('query', 'search')
      );
  }
}
