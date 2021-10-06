import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PostsProviderService } from './postsProvider.service';

describe('PostsProviderService', () => {
  let service: PostsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpHandler, HttpClient] });
    service = TestBed.inject(PostsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
