import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute} from "@angular/router";
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";

@Component({
  selector: 'app-suppliers-search',
  templateUrl: './suppliers-search.component.html',
  styleUrls: ['./suppliers-search.component.css']
})
export class SuppliersSearchComponent implements OnInit {


  id: any;
  dataSuppliers = new MatTableDataSource<Supplier>;

  constructor(private suppliersService: SuppliersService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAllProducts();
  }

  getAllProducts() {
    this.suppliersService.getAll().subscribe((response:any)=>{
      this.dataSuppliers.data= response;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSuppliers.filter = filterValue.trim().toLowerCase();
  }

}
