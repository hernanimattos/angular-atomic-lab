import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsProviderService extends HttpClient {
  public baseUrl: string;

  constructor(handler: HttpHandler) {
    super(handler);
    this.baseUrl = environment.postBaseUrl;
  }

  get(url: string, options?: Object): Observable<any> {
    const newUrl = `${this.baseUrl}/${url}`;
    return super.get(newUrl, options);
  }
}
