import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class ThirdPartModule {}
