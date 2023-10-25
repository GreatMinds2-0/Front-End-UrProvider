import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id?: any;
  newProduct: Product;
  productsList: Array<Product>;
  productId?: number;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.newProduct = {} as Product;
    this.productsList = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any)=>{
      this.productsList=response;
      this.productId = this.productsList.length + 1;
    })
  }

  addProduct() {
    const addP = {
      name: this.newProduct.name,
      category: this.newProduct.category,
      image: this.newProduct.image,
      available: this.newProduct.available,
      description: this.newProduct.description,
      supplierId: this.id,
      id: this.productId
    }

    this.productsService.create(addP).subscribe();
  }
}
