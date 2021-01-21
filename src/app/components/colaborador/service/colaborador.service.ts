import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse } from 'src/app/core/model/IResponse';
import { Observable } from 'rxjs';

const API_COLABORADOR_URL = `${environment.apiUrl}/colaboradores`;

@Injectable()
export class ColaboradorService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<IResponse> {
    return this.http.get<IResponse>(API_COLABORADOR_URL);
  }

}
