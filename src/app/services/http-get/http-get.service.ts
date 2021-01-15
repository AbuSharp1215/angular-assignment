import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  constructor(private httpclient:HttpClient) { }

  getRecords():Observable<any>{
    return this.httpclient.get("http://jsonplaceholder.typicode.com/users");
  }
}
