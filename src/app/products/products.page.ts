import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Products } from '../models/Products.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Products = new Products();

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

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService) { }

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

  async salvarP(){
    if (this.productsForm.valid){
       this.products.name = this.productsForm.get('name').value;
       this.products.description = this.productsForm.get('description').value;
       this.products.date = this.productsForm.get('date').value;
       this.products.price = this.productsForm.get('price').value;

       const id = await this.productsService.buscarId() as number;

       this.products.id = id;

       this.productsService.salvar(this.products);

       this.productsService.salvarId(id + 1);
       alert('Sucesso!!!!!');

    }else{
      alert('Formulario inválido!');
    }
   }

  ngOnInit() {
  }

}
