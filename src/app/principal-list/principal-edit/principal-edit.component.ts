import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Song } from '../../shared/song.model';
import { PrincipalListService } from "../principal-list.service";

@Component({
  selector: 'app-principal-edit',
  templateUrl: './principal-edit.component.html',
  styleUrls: ['./principal-edit.component.css']
})
export class PrincipalEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') plForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Song;

  constructor(private plService: PrincipalListService) { }

  ngOnInit() {
    this.subscription = this.plService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.plService.getSong(index);
          this.plForm.setValue({
            name: this.editedItem.name,
            artist: this.editedItem.artist
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSong = new Song(value.name, value.artist);
    if (this.editMode) {
      this.plService.updateSong(this.editedItemIndex, newSong);
    } else {
      this.plService.addSong(newSong);
    }
    this.editMode = false;
    form.reset()
  }

  onClear() {
    this.plForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.plService.deleteSong(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
