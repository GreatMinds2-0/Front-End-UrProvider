import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  id: any;
  products: Array<Product>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any) => {
      this.products = response;
      this.products = this.products.filter(x => x.supplierId == this.id)
    });
  }

  deleteProduct(id: number) {
    this.productsService.delete(id).subscribe(() => {
      this.products = this.products
        .filter((o: Product) => { return o.id !== id ? o : false; });
    });
    console.log(this.products);
  }
}
