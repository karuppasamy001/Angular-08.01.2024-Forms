import { ProductsService } from '../products.service';
import { Products } from './../interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
  productTypes = ['Electronics', 'AutoMobiles', 'Metals', 'Woods'] 

  products!: { [key: number] : Products }
  
  constructor(public productServices: ProductsService){}
  
}
