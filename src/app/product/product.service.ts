import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:8080/api/products/";

  constructor(
    private http: HttpClient
    ) { }
    
    list(): Observable<Product[]> {
      return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
          }

    get(id: number): Observable<Product>{
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
          }

          create(product: Product): Observable<Product>{
      return this.http.post(`${this.baseurl}`, product) as Observable<Product>;
          }

          change(product: Product): Observable<Product>{
      return this.http.put(`${this.baseurl}`, product) as Observable<Product>;
          }

          remove(product: Product): Observable<Product>{
          return this.http.delete(`${this.baseurl}/${product.id}`) as Observable<Product>;
          }
}
