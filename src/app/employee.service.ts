import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpClientModule} from'@angular/common/http/http'
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = '';
  constructor(private http:HttpClient) { }

  
  public getEmployee(): Observable<Employee[]>{
    
    return null;
    //return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all);
  }
   
  
    
}

}
