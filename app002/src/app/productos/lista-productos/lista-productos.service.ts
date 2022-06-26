import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {
  
  constructor(private http:HttpClient) { }

  public getRequest(idProducto:any=null) {

    let headers1:HttpHeaders=new HttpHeaders();

    headers1=headers1.set("Authorization","Bearer "+localStorage.getItem("_token"));
 
    if(idProducto==null)
      return this.http.get("http://apis.miapp.com/api/v1/productos",{headers:headers1});
    else
      return this.http.get("http://apis.miapp.com/api/v1/productos/"+idProducto,{headers: headers1});
  }
}
