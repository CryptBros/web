import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Balance } from '../models/Balance';

@Injectable()
export class BalanceService {
  private URL = "http://localhost:3000/balances";

  constructor(private http: HttpClient) { }

  getBalances(addr: string): Observable<Balance[]> {
    const url = this.URL + "?address=" + addr;
    return this.http.get<Balance[]>(url);
  }
}
