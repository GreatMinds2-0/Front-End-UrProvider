import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../model/store";
import {StoresService} from "../../services/stores.service";

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  id:any;
  storeData: Store;

  constructor(private storeService: StoresService, private route: ActivatedRoute) {
    this.storeData = {} as Store;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getSupplierById(Number(this.id));
  }
  getSupplierById(id: number){
    this.storeService.getById(id).subscribe((response:any)=>{
      this.storeData = response;
    })
  }
  getAll(){
    this.storeService.getAll().subscribe((response:any)=>{
      this.storeData = response;
    });
  }

}
