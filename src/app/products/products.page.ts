import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productsForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    date: ['', Validators.required],
    price: ['', Validators.required]
  });

  mensagensErro = {
    name: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}],
    description: [{tipo: 'required', aviso: 'O campo não pode estar vazio'},
    {tipo: 'minlength', aviso: 'O campo deve ter no mínimo 10 dígitos'}],
    date: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}],
    price: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}]
  };

  constructor(private formBuilder: FormBuilder) { }

  get name(){
    return this.productsForm.get('name');
  }

  get description(){
    return this.productsForm.get('description');
  }

  get date(){
    return this.productsForm.get('date');
  }

  get price(){
    return this.productsForm.get('price');
  }

  ngOnInit() {
  }

}
