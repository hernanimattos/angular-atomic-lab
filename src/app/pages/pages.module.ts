import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdPartModule } from '../third-part/third-part.module';
import { ComponentsModule } from '../components/components.module';
import { CompositionModule } from '../composition/composition.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home';
import { PostsProviderService } from '../http/postsProvider.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ThirdPartModule,
    ReactiveFormsModule,
    ComponentsModule,
    CompositionModule,
  ],
  exports: [ComponentsModule],
  providers: [PostsProviderService],
})
export class PagesModule {}
