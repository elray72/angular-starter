/** ====================================================================================================================
 // Dashboard Page
 // ================================================================================================================= */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterTransition }                     from '../../router.animations';

@Component({
  selector: 'project',
  templateUrl: './dashboard.component.html',
  animations: [RouterTransition()],
  host: {'[@RouterTransition]': ''}
})

export class DashboardPage implements OnInit {

  constructor(

  ) {}

  ngOnInit(): void {

  }
}
