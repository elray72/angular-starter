/** ====================================================================================================================
 // ProjectList Page
 // ================================================================================================================= */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router }                               from '@angular/router';

import { Project }          from '../../_models/project';
import { ProjectService }   from '../../_services/project.service';
import { RouterTransition } from '../../router.animations';
import { RouterAnimations } from '../../router.animations';

var log = require('bows')('ProjectListPage');

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  //animations: [RouterTransition()],
  //host: {'[@RouterTransition]': ''}
})

export class ProjectListPage implements OnInit {

  projects: Project[];
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router) { }

  getProjects(): void {

    console.log('test1');
    log('test2');

    this.projectService
        .getProjects()
        .then(p => this.projects = p);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.projectService.create(name)
      .then(p => {
        this.projects.push(p);
        this.selectedProject = null;
      });
  }

  delete(project: Project): void {
    this.projectService
        .delete(project.id)
        .then(() => {
          this.projects = this.projects.filter(p => p !== project);
          if (this.selectedProject === project) { this.selectedProject = null; }
        });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

  gotoDetail(): void {
    this.router.navigate(['/projects', this.selectedProject.id]);
  }
}
