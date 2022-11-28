import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';

  sum(...arr: number[]) {
    return arr.reduce((sum: number, curr: number) => sum + curr, 0);
  }

}
