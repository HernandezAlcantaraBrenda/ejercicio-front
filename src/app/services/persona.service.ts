import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Persona} from '../models/persona.model';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private readonly URL_PERSONA;

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService
  ) {
    this.URL_PERSONA = environment.URL_API + 'personas';
  }

  index(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL_PERSONA);
  }

  create(persona: Persona): Observable<Persona> {
    return this.httpClient.post<Persona>(this.URL_PERSONA, persona)
      .pipe(catchError(error => {
        this.notificationService.error('No se ha podido crear la persona');
        return throwError('No se ha podido crear la persona');
      }), tap(() => {
        this.notificationService.success('Se ha registrado la persona');
      }));
  }

  delete(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>(this.URL_PERSONA + id)
      .pipe(catchError(error => {
        this.notificationService.error('No se pudo eliminar la persona');
        return throwError('No se pudo eliminar la persona');
      }), tap(() => {
        this.notificationService.success('se ha eliminado a la persona');
      }));
  }


}
