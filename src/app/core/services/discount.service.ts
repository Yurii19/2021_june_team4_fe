import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDiscount } from 'src/app/shared/interfaces';
import { API_URL } from '../../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor( private http: HttpClient ) { }

  getDiscounts(): Observable<IDiscount[]> {
    return this.http.get<IDiscount[]>(`${API_URL}/discounts`);
  };

  createDiscount(discount: IDiscount): Observable<any> {
    return this.http.post<IDiscount>(`${API_URL}/discounts`, discount, httpOptions);
  }
}
