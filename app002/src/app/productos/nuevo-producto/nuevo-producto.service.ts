import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevoProductoService {

  constructor(private http:HttpClient) { }


  public saveProducto(producto:any)
  {

    let headers1:HttpHeaders=new HttpHeaders();

    headers1=headers1.set("Authorization","Bearer "+localStorage.getItem("_token"));
    
    return this.http.post("http://apis.miapp.com/api/v1/productos",producto,{headers:headers1});
  }
}
