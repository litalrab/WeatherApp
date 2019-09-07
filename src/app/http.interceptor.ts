import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of ,throwError} from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if( evt.body && !evt.body.Message)
                     {
                        this.toasterService.success("success !! (:");

                     }  
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {

                    try {
                        this.toasterService.error(err.message );
                    } catch(e) {
                        this.toasterService.error('An error occurred', 'An error occurred');
                    }
                }
                return throwError(err);
            }));
    
      }
      
}