import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

export const interceptorProvider = [
  {
    procider: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
