import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Song } from '../shared/song.model';
import { PrincipalListService } from './principal-list.service';

@Component({
  selector: 'app-principal-list',
  templateUrl: './principal-list.component.html',
  styleUrls: ['./principal-list.component.css']
})
export class PrincipalListComponent implements OnInit, OnDestroy {
  songs: Song[];
  private subscription: Subscription;

  constructor(private plService: PrincipalListService) { }

  ngOnInit() {
    this.songs = this.plService.getSongs();
    this.subscription = this.plService.songsChanged
      .subscribe(
        (songs: Song[]) => {
          this.songs = songs;
        }
      );
  }

  onEditItem(index: number) {
    this.plService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
