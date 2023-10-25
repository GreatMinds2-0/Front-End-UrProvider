import { Injectable } from '@angular/core';
import {TemplateService} from "../../shared/services/template.service";
import {Supplier} from "../model/supplier";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends TemplateService<Supplier>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/suppliers';
    // API ficticia this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';
  }
}
