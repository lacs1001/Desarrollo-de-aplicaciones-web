import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http:HttpClient) { }


  public getUser()
  {

    let headers1:HttpHeaders=new HttpHeaders();

    if(localStorage.getItem("_token"))
      headers1=headers1.set("Authorization","Bearer "+localStorage.getItem("_token"));
 
    return this.http.get("http://apis.miapp.com/api/v1/users/obtener-usuario-autenticado",{headers:headers1});
    

  }

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
