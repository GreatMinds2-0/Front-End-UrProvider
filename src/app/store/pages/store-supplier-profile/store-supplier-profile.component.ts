import { Component, OnInit } from '@angular/core';
import {Supplier} from "../../../supplier/model/supplier";
import {SuppliersService} from "../../../supplier/services/suppliers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-store-supplier-profile',
  templateUrl: './store-supplier-profile.component.html',
  styleUrls: ['./store-supplier-profile.component.css']
})
export class StoreSupplierProfileComponent implements OnInit {
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];
  id:any;
  pid:any;
  isVisible: boolean;

  supplierData: Supplier;
  constructor(private suppliersService: SuppliersService,
              private route: ActivatedRoute) {
    this.supplierData = {} as Supplier;
    this.isVisible= false;
  }

  ngOnInit(): void {
    this.pid = Number(this.route.snapshot.paramMap.get("pid"));
    this.getSupplierById(Number(this.pid));
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  getSupplierById(id: number) {
    this.suppliersService.getById(id).subscribe((response:any) => {
      this.supplierData = response;
    })
  }
  isVisibleProducts(){
    if (this.isVisible===false)
      return this.isVisible=true;
    else return this.isVisible=false;
  }
  updateLikes(){

    this.supplierData.likes=Number(this.supplierData.likes)+1;
    this.suppliersService.update(this.supplierData.id,this.supplierData).subscribe();
  }
  selectStar(value: number): void{

    // prevent multiple selection
    if ( this.selectedRating === 0){

      this.stars.filter( (star) => {

        if ( star.id <= value){

          star.class = 'star-gold star';

        }else{

          star.class = 'star-gray star';

        }

        return star;
      });

    }

    this.selectedRating = value;

  }
}
