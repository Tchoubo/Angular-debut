import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInscription } from '../model/inscription.model';
import { RetourApi } from '../model/retourApi.model';
const httpOptions = {
  headers: new HttpHeaders({'Content§Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resourceAuthUrl = "http://192.168.100.173:9090/estateAgent"

  constructor(
    private http: HttpClient) { }

    inscription(inscription: IInscription): Observable<RetourApi> {
      return this.http.post<RetourApi>(this.resourceAuthUrl+'/api/auth/signup', inscription);
    }

  /*inscription(inscription: IInscription): Observable<RetourApi>{
        return this.
  }*/
}
