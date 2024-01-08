import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  products: any;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = Object.values(this.productService.products)
  }

  buyProduct(productId: string) {
    console.log(`Product with ID ${productId} has been bought.`);
  }
}
