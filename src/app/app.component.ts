import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter';
  loadedFeature = 'recipes';

  handleFeatureSelected(route: string) {
    this.loadedFeature = route;
  }
}
