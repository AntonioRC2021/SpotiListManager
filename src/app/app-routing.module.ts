import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PrincipalListComponent } from './principal-list/principal-list.component';
import { HomeComponent } from "./core/home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playlist', loadChildren: './playlists/playlists.module#PlaylistModule'},
  { path: 'principal-list', component: PrincipalListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
