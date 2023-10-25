import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id?: any;
  pid?: any;
  productData: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.productData = {} as Product;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.pid = Number(this.route.snapshot.paramMap.get("pid"));
    this.getProductData(this.pid);
  }

  getProductData(id: number) {
    this.productsService.getById(id).subscribe((response:any)=>{
      this.productData=response;
    })
  }

  updateProduct() {
    const updateP = {
      name: this.productData.name,
      category: this.productData.category,
      image: this.productData.image,
      available: this.productData.available,
      description: this.productData.description,
      supplierId: this.id
    }

    this.productsService.update(this.productData.id, updateP).subscribe();
  }
}
