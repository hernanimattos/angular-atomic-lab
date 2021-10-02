import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartModule } from '../third-part/third-part.module';
import { ComponentsModule } from '../components/components.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThirdPartModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [ComponentsModule],
})
export class PagesModule {}
