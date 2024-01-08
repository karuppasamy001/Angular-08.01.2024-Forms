import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from './../interface';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})


export class SellComponent {
  @ViewChild('myForm')
  myForm!: NgForm;
  productTypes = ['Electronics', 'AutoMobiles', 'Metals', 'Woods'] 

  products: Products = {
    id : 0,
    productType: '',
    productName: '',
    productDescription: '',
    productPrice: 0,
    productLife: '',
    warranty: false
  }

  
  constructor(public productServices: ProductsService, private route: Router){}

  onSubmit(){
    if(this.myForm.valid){
      const index: number = Object.values(this.productServices.products).length + 1
      this.products.id = index

      if(this.products.productPrice < 0){
        alert("Price of the product cannot be negative")
        return
      }

      const newProduct : Products = {...this.products}
      this.productServices.products[index] = newProduct
  
      console.log(this.productServices.products)
      this.route.navigate(['/BuyProduct'])
    }
    else{
      alert("please fill all the details")
    }
    
  }
  
}
