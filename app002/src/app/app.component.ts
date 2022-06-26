import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  ngOnInit(): void {
    
    if(!localStorage.getItem("_token") && document.location.pathname!="/login")
    {
      document.location.href="/login";
    }
  }


  title = 'app002';
}
