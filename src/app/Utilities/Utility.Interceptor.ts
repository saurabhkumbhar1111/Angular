import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../CustomerLogin/CustomerLogin.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private user:User) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.user.token}`
                }
            });
        

        return next.handle(request);
    }
}