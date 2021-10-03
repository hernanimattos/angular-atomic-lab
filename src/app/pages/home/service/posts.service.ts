import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsProviderService } from 'src/app/http/postsProvider.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private postsProvider: PostsProviderService) {}

  getPosts(): Observable<any> {
    return this.postsProvider.get('posts');
  }
}
