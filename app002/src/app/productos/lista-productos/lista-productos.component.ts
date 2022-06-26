import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ListaProductosService } from './lista-productos.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  title="titulo1";

  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any> = new Subject<any>();

  ListaProductos:any=[];

  modalRef: MdbModalRef<NuevoProductoComponent> | null = null;

  constructor(private ListaProductosService:ListaProductosService,private modalService: MdbModalService) { }

  cargarProductos():void
  {
    this.title="Productos";

    this.ListaProductosService.getRequest().subscribe((response:any)=>{
      this.ListaProductos=response.data;
      this.dtTrigger.next();
    });
  }


  ngOnInit(): void {

    this.dtOptions={
      pagingType:"full_numbers",
      pageLength:5,
      processing:true
    }

    this.cargarProductos();

    this.dtTrigger.subscribe((data:any)=>{});
  }

  lgbtnclick()
  {
    this.title="NUEVO VALOR";
  }


  nuevoProducto()
  {
    this.modalRef = this.modalService.open(NuevoProductoComponent);
  }
}
