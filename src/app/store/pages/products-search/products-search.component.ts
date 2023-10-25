import { Component, OnInit,Output } from '@angular/core';
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {EMPTY} from "rxjs";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})

export class ProductsSearchComponent implements OnInit {
  searchTerm: any;
  id: any;


  dataSource = new MatTableDataSource<Product>;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.searchTerm = this.route.snapshot.paramMap.get("search");
    this.getAllProducts();
    this.applyFilterInit(  this.searchTerm );
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response:any)=>{
      this.dataSource.data= response;
    })
  }
  getProductsBySupplierId(){
    this.productsService.getAll().subscribe((response:any) => {
      this.dataSource.data = response;
      this.dataSource.data = this.dataSource.data.filter(x => x.supplierId == this.id)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterInit(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


}
