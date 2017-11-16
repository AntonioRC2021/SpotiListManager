import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { PlaylistService } from '../playlists/playlist.service';
import { Playlist } from '../playlists/playlist.model';
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private playlistService: PlaylistService,
              private authService: AuthService) {
  }

  storagePlaylists() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-spotify-lists.firebaseio.com/playlists.json?auth=' + token, this.playlistService.getPlaylist());
  }

  getPlaylist() {
    const token = this.authService.getToken();

    this.http.get('https://ng-spotify-lists.firebaseio.com/playlists.json?auth=' + token)
      .map(
        (response: Response) => {
          const playlists: Playlist[] = response.json();
          for (let playlist of playlists) {
            if (!playlist['songs']) {
              playlist['songs'] = [];
            }
          }
          return playlists;
        }
      )
      .subscribe(
        (playlists: Playlist[]) => {
          this.playlistService.setPlaylists(playlists);
        }
      );
  }
}
