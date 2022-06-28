import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  perfilUsuario:any="";


  ngOnInit(): void {

    let strUser:any=localStorage.getItem("_user");
    let user=JSON.parse(strUser);
    this.perfilUsuario=user.perfil;    
  }

}
