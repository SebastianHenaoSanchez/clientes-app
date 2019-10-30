import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'; 
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private titulo: any = "Crear cliente"
  private cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

  public create():void{
    console.log("Clicked");
    console.log(this.cliente);
  }

}
