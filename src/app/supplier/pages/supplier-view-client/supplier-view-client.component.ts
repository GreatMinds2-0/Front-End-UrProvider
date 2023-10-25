import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../store/model/store";
import {StoresService} from "../../../store/services/stores.service";

@Component({
  selector: 'app-supplier-view-client',
  templateUrl: './supplier-view-client.component.html',
  styleUrls: ['./supplier-view-client.component.css']
})
export class SupplierViewClientComponent implements OnInit {
  cid: any;
  id: any;
  store: Store;

  constructor(private storesService: StoresService,
              private route: ActivatedRoute) {
    this.store = {} as Store;
  }

  ngOnInit(): void {
    this.cid = Number(this.route.snapshot.paramMap.get("cid"));
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getStoreData();
  }

  getStoreData() {
    this.storesService.getById(this.cid).subscribe((response:any)=>{
      this.store=response;
    })
  }
}
