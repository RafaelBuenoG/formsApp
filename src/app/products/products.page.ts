import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  mensagensErro = {
    name: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}, {tipo: 'minlenght', aviso: 'O campo deve ter no mínimo 3 dígitos'}],
    description: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}, {tipo: 'minlength', aviso: 'O campo deve ter no mínimo 20 dígitos'}],
  };

  constructor() { }

  ngOnInit() {
  }

}
