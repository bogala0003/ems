import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const baseUrl="https://jsonplaceholder.typicode.com/";
@Injectable()
export class AppService {
  options: Object;
  constructor(private httpClient: HttpClient) {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.options = {
      headers: headers,
    };
  }
  get<T>(path: string) {
    return this.httpClient.get(baseUrl+path).map(this.getData).catch(this.error);
  }
  add<T>(path: string) {
    return this.httpClient.post(baseUrl+path, this.options).map(this.getData).catch(this.error);
  }
  put<T>(path: string) {
    return this.httpClient.put(baseUrl+path, this.options).map(this.getData).catch(this.error);
  }
  delete<T>(path: string) {
    return this.httpClient.put(baseUrl+path, this.options).map(this.getData).catch(this.error);
  }
  private error(error: any) {
    return Observable.throw(error);
  }
  private getData(res: any) {
    if (res && res.status === 200) {
      return res.json() || {};
    } else {
      return res || {};
    }
  }
}
