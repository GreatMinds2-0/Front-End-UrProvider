import {Component, OnInit} from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../model/store";
import {StoresService} from "../../services/stores.service";
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../../inventory/model/product";
import {ProductsService} from "../../../inventory/services/products.service";

@Component({
  selector: 'app-store-home',
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.css']
})
export class StoreHomeComponent implements OnInit {

  searchTerm: any;
  id: any;
  storeData: Store;
  supplierData: Array<Supplier>;

  dataProduct = new MatTableDataSource<Product>;
  dataSupplier = new MatTableDataSource<Supplier>;

  constructor(private router: Router,
              private suppliersService: SuppliersService,
              private productsService: ProductsService,
              private route: ActivatedRoute,
              private storesService: StoresService) {
    this.supplierData = [];
    this.storeData = {} as Store;

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getSupplier();
    this.getStoreById(this.id);
    this.getMostSellProducts();
    this.getMoreLikedSuppliers();

  }
  getMostSellProducts(){
    this.productsService.getAll().subscribe((response:any)=>{
      this.dataProduct.data= response;
      this.dataProduct.data=this.dataProduct.data.sort((a,b)=>(a.numberOfSales>b.numberOfSales?-1:1)).slice(0,4);
    })
  }
  getMoreLikedSuppliers(){
    this.suppliersService.getAll().subscribe((response:any)=>{
      this.dataSupplier.data= response;
      this.dataSupplier.data=this.dataSupplier.data.sort((a,b)=>(a.likes>b.likes?-1:1)).slice(0,4);
    })
  }

  getSupplier() {
    this.suppliersService.getAll().subscribe((response: any) => {
      this.supplierData = response;
    })
  }

  getStoreById(id: number){
    this.storesService.getById(id).subscribe((response:any)=>{
      this.storeData=response;
    })
  }
  filter(){
    this.router.navigate([`./store-products-list/${this.id}/${this.searchTerm}`]);
  }

}
