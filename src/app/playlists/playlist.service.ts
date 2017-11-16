import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import { Playlist } from './playlist.model';
import { Song } from "../shared/song.model";
import { PrincipalListService } from "../principal-list/principal-list.service";

@Injectable()
export class PlaylistService {
  playlistChanged = new Subject<Playlist[]>();

  private playlists: Playlist[] = [
    new Playlist(
      'Rock',
      'The best of rock and roll',
      'https://u.scdn.co/images/pl/default/1b35f24e2798f8fff8d5a6f5ac739fbd72677dcf',
      [
        new Song('Sunshine Of Your Love', 'Cream'),
        new Song('I Dont Want ti Miss a Thing', 'Aerosmith'),
        new Song('Welcome To The Jungle', 'Guns N Roses'),
        new Song('Enter Sandman', 'Metallica'),
        new Song('Master Of Puppets', 'Metallica')
      ]),
    new Playlist(
      'Pop',
      'The newest of pop',
      'https://assets2.sharedplaylists.com/playlists/9f/84/34/sz300x300_love-pop-1-361622a61d.jpeg',
      [
        new Song('Problem', 'Ariana Grande, Iggy Azalea'),
        new Song('Toothbrush', 'DNCE'),
        new Song('Zero To Hero', 'Ariana Grande'),
        new Song('I Dont Wanna Live Forever', 'ZAYN, Taylor Swift'),
        new Song('We Own The Night', 'The Wanted')
      ]),
    new Playlist(
      'Trap',
      'Best of latin trap',
      'https://pl.scdn.co/images/pl/default/46315ff197ed7d9d2466fede52e83419e2bbb6f3',
      [
        new Song('Krippy Kush', 'Farruko, Bad Bunny, Rvssian'),
        new Song('Me Acostumbre', 'Arcangel, Bad Bunny'),
        new Song('Ahora Dice', 'Chris Jeday, J Balvin, Ozuna, Arcangel'),
        new Song('Explicale', 'Yandel, Bad Bunny'),
        new Song('Soy Peor', 'Bad Bunny')
      ]),
    new Playlist(
      'Reggaeton',
      'The best of reggaeton',
      'https://pl.scdn.co/images/pl/default/4ebf28843767c01f6f93d17a9c929b217de0d703',
      [
        new Song('Sola (Remix)', 'Anuel Aa, Daddy Yankee, Wisin, Farruko, Zion & Lennox'),
        new Song('Se preparo', 'Ozuna'),
        new Song('Una Lady Como Tu', 'Manuel Turizo'),
        new Song('No Quiero Amores', 'Yandel, Ozuna'),
        new Song('Solo Mia', 'Yandel, Maluma')
      ]),
    new Playlist(
      'Hip-Hop',
      'The hottest of hip-hop',
      'https://i.scdn.co/image/dfc7eb5d2f2674e4c2dcc70c3051132d5e7e61fc',
      [
        new Song('Still D.R.E.', 'Dr. Dre, Snoop Dogg'),
        new Song('The Watcher', 'Dr. Dre'),
        new Song('It Was A Good Day', 'Ice Cube'),
        new Song('Lose Yourself', 'Eminem'),
        new Song('Party We Will Throw Now!', 'Warren G, Nate Dogg, The Game')
      ])
  ];

  constructor(private plService: PrincipalListService) {}

  setPlaylists(playlists: Playlist[]) {
    this.playlists = playlists;
    this.playlistChanged.next(this.playlists.slice());
  }

  getPlaylist() {
    return this.playlists.slice();
  }

  getPlaylists(index: number) {
    return this.playlists[index];
  }

  addSongsToPrincipalList(songs: Song[]) {
    this.plService.addSongs(songs);
  }

  addPlaylist(playlist: Playlist) {
    this.playlists.push(playlist);
    this.playlistChanged.next(this.playlists.slice());
  }

  updatePlaylist(index: number, newPlaylist: Playlist) {
    this.playlists[index] = newPlaylist;
    this.playlistChanged.next(this.playlists.slice());
  }

  deletePlaylist(index: number) {
    this.playlists.splice(index, 1);
    this.playlistChanged.next(this.playlists.slice());
  }
}
