/** ====================================================================================================================
 // App.Component
 // ================================================================================================================= */

import { Component, ViewEncapsulation } from '@angular/core';
import '../styles/main.scss';

@Component({
  selector: 'bojangles',
  templateUrl: './app.component.html',
  host: { 'class': 'site' }
})

export class AppComponent {
  title = 'Bojangles';
}