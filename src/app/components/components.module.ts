import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartModule } from '../third-part/third-part.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormRegisterComponent } from './user-form-register';
import { TopNavigationComponent } from './top-navigation';
import { CardComponent } from './card';

@NgModule({
  declarations: [
    UserFormRegisterComponent,
    TopNavigationComponent,
    CardComponent,
  ],
  imports: [CommonModule, ThirdPartModule, ReactiveFormsModule],
  exports: [UserFormRegisterComponent, TopNavigationComponent, CardComponent],
})
export class ComponentsModule {}
