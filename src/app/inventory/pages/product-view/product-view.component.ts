import { Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";

import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {Supplier} from "../../../supplier/model/supplier";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  userId:any;
  productId:any;
  supplierId:any;
  isVisible: boolean;
  number:any;
  productData: Product;
  supplierData : Supplier;

  constructor(private productsService: ProductsService,
              private suppliersService:SuppliersService,
              private route: ActivatedRoute) {
    this.productData = {} as Product;
    this.supplierData ={} as Supplier;
    this.isVisible=false;
  }

  ngOnInit(): void {
    this.userId=Number(this.route.snapshot.paramMap.get("id"));
    this.productId = Number(this.route.snapshot.paramMap.get("pid"));
    this.supplierId= Number(this.route.snapshot.paramMap.get("sid"));
    this.getProductById(Number(this.productId));
    this.getSupplierById(Number(this.supplierId))
  }

  getProductById(productId: number) {
    this.productsService.getById(productId).subscribe((response:any) => {
      this.productData = response;
    })
  }


  getSupplierById(supplierId: number) {
    this.suppliersService.getById(supplierId).subscribe((response:any) => {
      this.supplierData = response;
    })
  }
  isVisibleSupplier(){
    if (this.isVisible ===false)
      return this.isVisible=true;
    else return this.isVisible= false;
  }


}
