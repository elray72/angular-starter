/** ====================================================================================================================
 // Home Page
 // ================================================================================================================= */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project }                              from '../../_models/project';
import { ProjectService }                       from '../../_services/project.service';
import { RouterTransition }                     from '../../router.animations';

var log = require('bows')('HomePage');

@Component({
  selector: 'my-dashboard',
  templateUrl: './home.component.html',
  //animations: [RouterTransition()],
  //host: {"[@RouterTransition]": ''}
  //styleUrls: [ './home.component.scss' ],
  //encapsulation: ViewEncapsulation.None
})

export class HomePage implements OnInit {

  projects: Project[] = [];

  constructor(
      private projectService: ProjectService) { }

  ngOnInit(): void {

    log('HomePage');
    this.projectService.getProjects()
      .then(p => this.projects = p.slice(1, 5));
  }
}
