/* eslint-disable no-underscore-dangle */ 
import { Injectable } from '@angular/core';
import { Products } from '../models/Products.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listaProducts: Products[] = [];

  constructor(private storageService: StorageService) { }

  async salvar(products:Products){
    await this.buscarTodos();
    this.listaProducts[products.id]= products;
    await this.storageService.set('Produtos', this.listaProducts);
  }

  async buscarTodos(){
    this.listaProducts = (await this.storageService.get(
      'products'
    )) as null as Products[];

    if (!this.listaProducts) {
      this.listaProducts = [];
    }
    return this.listaProducts;
  }

    async salvarId(id: number){
      await this.storageService.set('idProducts', id);
    }
  
    async buscarId(){
      const id =  await this.storageService.get('idProducts');
      if(!id){
        return 0;
      }
      return id;
    }

}