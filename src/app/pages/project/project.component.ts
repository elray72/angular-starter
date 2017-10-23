import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewEncapsulation }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Project }                     from '../../_models/project';
import { ProjectService }              from '../../_services/project.service';
import { RouterTransition } from '../../router.animations';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  animations: [RouterTransition()],
  host: {'[@RouterTransition]': ''}
  //styleUrls: [ './project.component.scss' ],
  //encapsulation: ViewEncapsulation.None
})
export class ProjectPage implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.projectService.getProject(+params.get('id')))
      .subscribe(p => this.project = p);
  }

  save(): void {
    this.projectService.update(this.project)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
