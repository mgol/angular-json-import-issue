import { Component } from '@angular/core';

// This works only in tests:
import * as data from './data.json';
// This works only in the app:
// import data from './data.json';

const dataAny = data as any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName: string = dataAny.appName;
}
