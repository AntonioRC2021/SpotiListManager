import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistStartComponent } from './playlist-start/playlist-start.component';
import { PlaylistComponent } from './playlist.component';

const playlistRoutes: Routes = [
  { path: '', component: PlaylistComponent , children: [
    { path: '', component: PlaylistStartComponent },
    { path: 'new', component: PlaylistEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: PlaylistDetailComponent },
    { path: ':id/edit', component: PlaylistEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(playlistRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PlaylistRoutingModule{}
