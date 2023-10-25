import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Routes} from "@angular/router";
import {Supplier} from "../../model/supplier";
import {SuppliersService} from "../../services/suppliers.service";


@Component({
  selector: 'app-supplier-edit-profile',
  templateUrl: './supplier-edit-profile.component.html',
  styleUrls: ['./supplier-edit-profile.component.css']
})
export class SupplierEditProfileComponent implements OnInit {
  id?:any;
  profilesData: Supplier;

  constructor(private supplierService: SuppliersService, private route: ActivatedRoute) {
    this.profilesData = {} as Supplier;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getData(Number(this.id));
  }

  getData(id: number) {
    this.route.params.subscribe(() => this.supplierService.getById(id).subscribe((retrievedPost) => {
        this.profilesData.supplierName = retrievedPost.supplierName,
        this.profilesData.name = retrievedPost.name,
        this.profilesData.lastName = retrievedPost.lastName,
        this.profilesData.image = retrievedPost.image,
        this.profilesData.email = retrievedPost.email,
        this.profilesData.address = retrievedPost.address,
        this.profilesData.ruc = retrievedPost.ruc,
        this.profilesData.password = retrievedPost.password,
        this.profilesData.description = retrievedPost.description,
        this.profilesData.phone = retrievedPost.phone,
        this.profilesData.category = retrievedPost.category
    }));

  }

  updateProfile() {
    const updatePost = {
      supplierName: this.profilesData.supplierName,
      name: this.profilesData.name,
      lastName: this.profilesData.lastName,
      image: this.profilesData.image,
      email: this.profilesData.email,
      address: this.profilesData.address,
      ruc: this.profilesData.ruc,
      category: this.profilesData.category,
      description: this.profilesData.description,
      phone: this.profilesData.phone,
      password: this.profilesData.password
    }

    this.supplierService.update(this.id, updatePost).subscribe();
  }

}
