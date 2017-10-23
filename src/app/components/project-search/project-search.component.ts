import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import {ViewEncapsulation} from '@angular/core';
import 'rxjs/add/observable/of';


// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Project }               from '../../_models/project';
import { ProjectSearchService }  from '../../_services/project-search.service';

@Component({
  selector: 'project-search',
  templateUrl: './project-search.component.html',
  //styleUrls: [ './project-search.component.scss' ],
  providers: [ProjectSearchService],
  //encapsulation: ViewEncapsulation.None
})
export class ProjectSearchComponent implements OnInit {
  projects: Observable<Project[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private projectSearchService: ProjectSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    console.log('ngOnInit');
    this.projects = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.projectSearchService.search(term)
        // or the observable of empty projects if there was no search term
        : Observable.of<Project[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Project[]>([]);
      });
  }

  gotoDetail(p: Project): void {

    let link = ['/projects', p.id];
    this.router.navigate(link);
  }
}
