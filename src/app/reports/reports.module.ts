import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';

/**
 * ReportsModule simplificado para Module Federation
 * NO usa RouterModule para evitar conflictos de inyección con Angular 19
 */
@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule
    // NOTA: No importamos RouterModule aquí para evitar NG0203
  ],
  exports: [ReportsComponent]
})
export class ReportsModule { }
