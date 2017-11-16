import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PlaylistComponent } from './playlist.component';
import { PlaylistStartComponent } from './playlist-start/playlist-start.component';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { PlaylistDetailComponent } from'./playlist-detail/playlist-detail.component';
import { PlaylistItemComponent } from "./playlist-list/playlist-item/playlist-item.component";
import { PlaylistRoutingModule } from "./playlists-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistStartComponent,
    PlaylistListComponent,
    PlaylistEditComponent,
    PlaylistDetailComponent,
    PlaylistItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlaylistRoutingModule,
    SharedModule
  ]
})
export class PlaylistModule {}
