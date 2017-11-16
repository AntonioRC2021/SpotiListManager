import { Song } from '../shared/song.model';

export class Playlist{
  public name: string;
  public description: string;
  public imagePath: string;
  public songs: Song[];

  constructor(name: string, desc: string, imagePath: string, songs: Song[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.songs = songs;
  }
}
