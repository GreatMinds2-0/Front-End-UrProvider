import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../model/store";
import {StoresService} from "../../services/stores.service";

@Component({
  selector: 'app-store-edit-profile',
  templateUrl: './store-edit-profile.component.html',
  styleUrls: ['./store-edit-profile.component.css']
})
export class StoreEditProfileComponent implements OnInit {

  id?:any;
  updateStoreData: Store;
  storeData: Store;

  constructor(private storeService: StoresService, private route: ActivatedRoute) {
    this.storeData = {} as Store;
    this.updateStoreData = {} as Store;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getData(Number(this.id));
  }

  getData(id: number) {
    this.route.params.subscribe(() => this.storeService.getById(id).subscribe((retrievedPost) => {
      this.storeData.image = retrievedPost.image,
        this.storeData.storeName = retrievedPost.storeName,
        this.storeData.name = retrievedPost.name,
        this.storeData.lastName = retrievedPost.lastName,
        this.storeData.email = retrievedPost.email,
        this.storeData.address = retrievedPost.address,
        this.storeData.password = retrievedPost.password,
        this.storeData.phone = retrievedPost.phone
    }));

  }

  updateProfile() {
    const updatePost = {
      storeName: this.storeData.storeName,
      name: this.storeData.name,
      lastName: this.storeData.lastName,
      email: this.storeData.email,
      address: this.storeData.address,
      phone: this.storeData.phone,
      password: this.storeData.password,
      image: this.storeData.image
    }

    this.storeService.update(this.id, updatePost).subscribe();
  }

}
