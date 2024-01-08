import { Injectable } from '@angular/core';
import { Products } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: {
    [key: string] : Products 
  } = {}
}
