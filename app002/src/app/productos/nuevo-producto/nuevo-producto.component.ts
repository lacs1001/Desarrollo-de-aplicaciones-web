import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NuevoProductoService } from './nuevo-producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  codigo:string="";
  nombre:string="";
  constructor(public modalRef: MdbModalRef<NuevoProductoComponent>, private nuevoProductoService:NuevoProductoService) { }

  ngOnInit(): void {
  }

  cerrarModal()
  {

  }

  guardarProducto()
  {
    let producto:any={
      codigo:this.codigo,
      nombre:this.nombre,
      imagen:{
        nombre:this.imageName,
        data:this.imagenBase64
      }
    };

  

     
    this.nuevoProductoService.saveProducto(producto).subscribe((response:any)=>{

      console.log(response);
      this.modalRef.close();

    });


  }

  imagenBase64:any=null;
  imageName:any=null;

  onChange(event:any) {


    //console.log(event.target.files[0]);

    this.imageName=event.target.files[0].name;

    let reader = new FileReader();

    reader.onload = (imagen: any) => {

      let _imgBase64 = imagen.target.result;

      let arryImg = _imgBase64.split(",");
      //console.log(arryImg[1]);

      this.imagenBase64=arryImg[1];
                       
    }

    reader.readAsDataURL(event.target.files[0]);




  }



}
