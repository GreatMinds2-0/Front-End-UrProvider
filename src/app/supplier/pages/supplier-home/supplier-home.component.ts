import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../model/supplier";
import {SuppliersService} from "../../services/suppliers.service";
import {Store} from "../../../store/model/store";
import {StoresService} from "../../../store/services/stores.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-supplier-home',
  templateUrl: './supplier-home.component.html',
  styleUrls: ['./supplier-home.component.css']
})
export class SupplierHomeComponent implements OnInit {

  id: any;
  supplierData: Supplier;
  stores: Array<Store>;

  constructor(private router: Router,
              private suppliersService: SuppliersService,
              private storesService: StoresService,
              private route: ActivatedRoute) {
    this.supplierData = {} as Supplier;
    this.stores = [];
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getSupplierById(Number(this.id));
    this.getAllStores();
  }
  getSupplierById(id: number) {
    this.suppliersService.getById(id).subscribe((response:any) => {
      this.supplierData = response;
    })
  }

  getAllStores() {
    this.storesService.getAll().subscribe((response:any) => {
      this.stores = response.slice(0,3);
    })
  }

  redirectClient(id: number) {
    this.router.navigate([`./supplier/view-client/${this.id}/${id}`]);
  }
}
