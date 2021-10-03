import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from '../components/components.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [MenuComponent, PostsComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [MenuComponent, PostsComponent],
})
export class CompositionModule {}
