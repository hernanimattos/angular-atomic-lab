import { CommonModule } from '@angular/common';
import { HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompositionModule } from 'src/app/composition/composition.module';
import { PostsProviderService } from 'src/app/http/postsProvider.service';
import { ThirdPartModule } from 'src/app/third-part/third-part.module';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
