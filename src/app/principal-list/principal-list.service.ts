import { Song } from '../shared/song.model';
import { Subject } from "rxjs/Subject";


export class PrincipalListService {
  songsChanged = new Subject<Song[]>();
  startedEditing = new Subject<number>();
  private songs: Song[] = [
  new Song('Meant to Be','Bebe Rexha'),
  new Song('Mayores','Becky G, Bad Bunny'),
  new Song('Hips Dont Lie','Shakira, Wyclef Jean'),
  new Song('Soy peor','Bad Bunny'),
  new Song('Si tu novio te deja sola','J balvin, Bad Bunny')
];

  getSongs() {
    return this.songs.slice();
  }

  getSong(index: number) {
    return this.songs[index];
  }

  addSong(song: Song) {
    this.songs.push(song);
    this.songsChanged.next(this.songs.slice());
  }

  addSongs(songs: Song[]) {
    // for (let song of Songs) {
    //   this.addSong(song);
    // }
    this.songs.push(...songs);
    this.songsChanged.next(this.songs.slice());
  }

  updateSong(index: number, newSong: Song) {
    this.songs[index] = newSong;
    this.songsChanged.next(this.songs.slice());
  }

  deleteSong(index: number) {
    this.songs.splice(index, 1);
    this.songsChanged.next(this.songs.slice());
  }
}
