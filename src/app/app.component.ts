import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'playlist';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDvEnCA5U2Y3P7PIyW0QgR7W-IEcL4-KOA",
      authDomain: "ng-spotify-lists.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
