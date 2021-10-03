import { TestBed } from '@angular/core/testing';

import { PostsProviderService } from './postsProvider.service';

describe('PostsProviderService', () => {
  let service: PostsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
