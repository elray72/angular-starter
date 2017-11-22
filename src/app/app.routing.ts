/** ====================================================================================================================
 // App.Routing
 // ================================================================================================================= */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage }             from './pages/home/home.component';
import { DashboardPage }        from './pages/dashboard/dashboard.component';
import { ProjectListPage }      from './pages/project-list/project-list.component';
import { ProjectPage }          from './pages/project/project.component';

const routes: Routes = [
  { path: '',             component: HomePage },
  { path: 'projects',     component: ProjectListPage },
  { path: 'projects/:id', component: ProjectPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
