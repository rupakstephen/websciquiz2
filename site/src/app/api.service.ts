import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public apicall(method: string, route: string, body: any): Observable<Object> {
    const endpt = `http://localhost:3000/v1/${route}`
    let options: any = {
      headers : {
        'accept' : "application/json",
        "Access-Control-Allow-Origin" : "*",
      }
    }


    if(method == "GET"){
      return this.http.get(endpt, options);
    }
    else if(method == "POST"){
      return this.http.post(endpt,body,options);
    }
    else if(method == "DELETE"){
      return this.http.delete(endpt,options);
    }
    else if(method == "PUT"){
      return this.http.put(endpt,body,options)
    }
    else{
      return Observable.throw(console.error("No Valid Method"));
    }
  }

}
