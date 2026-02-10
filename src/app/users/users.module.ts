import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

/**
 * UsersModule simplificado para Module Federation
 * NO usa RouterModule para evitar conflictos de inyección con Angular 19
 */
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule
    // NOTA: No importamos RouterModule aquí para evitar NG0203
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
