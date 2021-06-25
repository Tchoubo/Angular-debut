import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InscripInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    alert("j'entre");
    if(request.url.includes('api/auth/signin')){
      request = request.clone(
        {
          setHeaders: {Authorization: "Basic "+ window.btoa(request.body.username +':'+request.body.password)}
        }
      );
    }
    return next.handle(request);
  }
}
