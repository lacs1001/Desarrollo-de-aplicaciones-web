import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http:HttpClient) { }

  public autenticar(m_email:string,m_password:string)
  {
    let requestObj:any=
    {
      email:m_email,
      password:m_password
    };

   return this.http.post("http://apis.miapp.com/api/v1/seguridad/login",requestObj);

  }



}
