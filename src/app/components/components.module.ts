import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartModule } from '../third-part/third-part.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormRegisterComponent } from './user-form-register';

@NgModule({
  declarations: [UserFormRegisterComponent],
  imports: [CommonModule, ThirdPartModule, ReactiveFormsModule],
  exports: [UserFormRegisterComponent],
})
export class ComponentsModule {}
