import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '.././request.class';
import { LineItem } from './request-lines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestLinesService {

  baseurl: string = "http://localhost:8080/api/line-items/";

  constructor(
    private http: HttpClient
    ) { }

    listByRequestId(id: number): Observable<LineItem[]> {
      return this.http.get(`${this.baseurl}lines-for-pr/${id}`) as Observable<LineItem[]>
    }
    
    list(): Observable<LineItem[]> {
      return this.http.get(`${this.baseurl}`) as Observable<LineItem[]>
          }

    get(id): Observable<LineItem>{
      return this.http.get(`${this.baseurl}${id}`) as Observable<LineItem>
          }

          create(lineItem: LineItem): Observable<LineItem>{
      return this.http.put(`${this.baseurl}`, lineItem) as Observable<LineItem>
          }

          change(lineItem: LineItem): Observable<LineItem>{
      return this.http.post(`${this.baseurl}`, lineItem) as Observable<LineItem>
          }

          remove(lineItem: LineItem): Observable<LineItem>{
          return this.http.delete(`${this.baseurl}${lineItem.id}`) as Observable<LineItem>
          }

          recalculate(lineItem: LineItem): Observable<LineItem>{
            return this.http.post(`${this.baseurl}`, lineItem) as Observable<LineItem>
          }

}
