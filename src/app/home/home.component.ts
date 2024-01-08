import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayText: string = 'BOS';

  expandText() {
    this.displayText = 'Buy or Sale';
  }

  resetText() {
    this.displayText = 'BOS';
  }
}
