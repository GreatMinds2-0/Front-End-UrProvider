import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Supplier} from "../../model/supplier";
import {SuppliersService} from "../../services/suppliers.service";

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.css']
})
export class SupplierProfileComponent implements OnInit {
  id:any;
  supplierData: Supplier;

  constructor(private supplierService: SuppliersService, private route: ActivatedRoute) {
    this.supplierData = {} as Supplier;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getSupplierById(Number(this.id));
  }
  getSupplierById(id: number){
    this.supplierService.getById(id).subscribe((response:any)=>{
      this.supplierData = response;
    })
  }
  getAll(){
    this.supplierService.getAll().subscribe((response:any)=>{
      this.supplierData = response;
    });
  }
}
