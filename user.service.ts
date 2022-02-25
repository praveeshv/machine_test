import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getUser(name:any){
    debugger
    console.log(name);
    
    return this.http.get<any>("https://api.github.com/users/"+name)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
