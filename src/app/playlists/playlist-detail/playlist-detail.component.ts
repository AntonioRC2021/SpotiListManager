import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Playlist } from '../playlist.model';
import { PlaylistService } from "../playlist.service";

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: Playlist;
  id: number;

  constructor(private playlistService: PlaylistService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.playlist = this.playlistService.getPlaylists(this.id);
        }
      );
  }

  onAddToPrincipalList() {
    this.playlistService.addSongsToPrincipalList(this.playlist.songs);
  }

  onEditPlaylist() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeletePlaylist() {
    this.playlistService.deletePlaylist(this.id);
    this.router.navigate(['/playlist']);
  }

}
