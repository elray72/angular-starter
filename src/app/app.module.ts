/** ====================================================================================================================
 // App.Module
 // ================================================================================================================= */

import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

// Core
import { AppRouting }               from './app.routing';
import { AppComponent }             from './app.component';

// Components
import { HomePage }                 from './pages/home/home.component';
import { ProjectListPage }          from './pages/project-list/project-list.component';
import { ProjectPage }              from './pages/project/project.component';
import { ProjectSearchComponent }   from './components/project-search/project-search.component';

// Services
import { ProjectService }           from './_services/project.service';
import { ProjectDataService }       from './_services/project-data.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProjectDataService),
    AppRouting
  ],
  declarations: [
    AppComponent,
    HomePage,
    ProjectListPage,
    ProjectPage,
    ProjectSearchComponent
  ],
  providers: [ ProjectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
