import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { PlaylistService } from "../playlist.service";

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {
  id: number;
  editMode = false;
  playlistForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private playlistService: PlaylistService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newPlaylist = new Playlist(
    // this.playlistForm.value['name'],
    //  this.playlistForm.value['description'],
    //  this.playlistForm.value['imagePath'],
    //  this.playlistForm.value['songs']);
    if (this.editMode) {
      this.playlistService.updatePlaylist(this.id, this.playlistForm.value);
    } else {
      this.playlistService.addPlaylist(this.playlistForm.value);
    }
    this.onCancel();
  }

  onAddSong() {
    (<FormArray>this.playlistForm.get('songs')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'artist': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteSong(index: number) {
    (<FormArray>this.playlistForm.get('songs')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let playlistName = '';
    let playlistImagePath = '';
    let playlistDescription = '';
    let playlistSongs = new FormArray([]);


    if (this.editMode) {
      const playlist = this.playlistService.getPlaylists(this.id);
      playlistName = playlist.name;
      playlistImagePath = playlist.imagePath;
      playlistDescription = playlist.description;
      if (playlist['songs']) {
        for (let song of playlist.songs) {
          playlistSongs.push(
            new FormGroup({
              'name': new FormControl(song.name, Validators.required),
              'artist': new FormControl(song.artist, Validators.required)
            })
          );
        }
      }
    }

    this.playlistForm = new FormGroup({
      'name': new FormControl(playlistName, Validators.required),
      'imagePath': new FormControl(playlistImagePath, Validators.required),
      'description': new FormControl(playlistDescription, Validators.required),
      'songs': playlistSongs
    });
  }

}


