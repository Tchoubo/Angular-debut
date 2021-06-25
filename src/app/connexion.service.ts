import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConnexion } from './model/connexion.model';
import { IRetourConnexion } from './model/retourConnexion.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private resourceConnexion = environment.serveur+"/api/auth"

  constructor(
    private http: HttpClient) { }

    connexion(connexion: IConnexion): Observable<IRetourConnexion> {
      return this.http.post<IRetourConnexion>(this.resourceConnexion+'/signin', connexion);
    }
}
