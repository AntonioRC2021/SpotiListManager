import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Playlist } from '../playlist.model';
import { PlaylistService } from "../playlist.service";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit, OnDestroy {
  playlists: Playlist[];
  subscription: Subscription;

  constructor(private playlistService: PlaylistService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.playlistService.playlistChanged
      .subscribe(
        (playlists: Playlist[]) => {
          this.playlists = playlists;
        }
      );
    this.playlists = this.playlistService.getPlaylist();
  }

  onNewPlaylist() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
