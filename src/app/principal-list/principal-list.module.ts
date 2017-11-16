import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrincipalListComponent } from './principal-list.component';
import { PrincipalEditComponent } from './principal-edit/principal-edit.component';

@NgModule({
  declarations: [
    PrincipalListComponent,
    PrincipalEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PrincipalListModule {}
