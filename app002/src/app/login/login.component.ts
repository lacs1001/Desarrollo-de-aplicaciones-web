import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";
 
  constructor(private autenticacion:AutenticacionService) { }


  login()
  {
    this.autenticacion.autenticar(this.email,this.password).subscribe((response:any)=>{
      
       localStorage.setItem('_token', response.data.token);

       document.location.href="/";

    });
  }

  ngOnInit(): void {
  }

}
