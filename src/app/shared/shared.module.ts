import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
  ],
})
export class SharedModule {}
