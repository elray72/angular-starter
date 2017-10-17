import { Component, ViewEncapsulation }          from '@angular/core';
//import { RouterTransition } from './router.animations';

import '../scss/styles.scss';

//import './app.component.scss';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  //animations: [routerTransition()],
  //styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Projects';
}
