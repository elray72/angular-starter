/** ====================================================================================================================
 // Project.Service
 // ================================================================================================================= */

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Project } from '../_models/project';

@Injectable()
export class ProjectService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private projectsApiUrl = 'api/projects';  // URL to web api

  constructor(private http: Http) { }

  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsApiUrl)
               .toPromise()
               .then(response => response.json().data as Project[])
               .catch(this.handleError);
  }


  getProject(id: number): Promise<Project> {
    const url = `${this.projectsApiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Project)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.projectsApiUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Project> {
    return this.http
      .post(this.projectsApiUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Project)
      .catch(this.handleError);
  }

  update(project: Project): Promise<Project> {
    const url = `${this.projectsApiUrl}/${project.id}`;
    return this.http
      .put(url, JSON.stringify(project), {headers: this.headers})
      .toPromise()
      .then(() => project)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

