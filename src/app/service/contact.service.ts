import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = 'https://portfolio-1x2a.onrender.com/portfolio/add';

  constructor(private http: HttpClient) { }

  postData(req: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.url, req, { headers });
  }

 
  postResume(): Observable<Resumecount> {
    const api="https://portfolio-1x2a.onrender.com/portfolio/resumeCount"
    return this.http.post<Resumecount>(api, {});
  }
}


export interface Resumecount {
  id: number;
  count: number;
}