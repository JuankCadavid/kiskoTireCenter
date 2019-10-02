import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { modelParamBatery } from '../models/modelParamBatery';
import { modelAudit } from '../models/modelParamBatery';



@Injectable({
  providedIn: 'root'
})
export class KioskoTireCenterService {

  API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  getBrands() {
    return this.http.get(`${this.API_URI}/kiosko/marca`);
  }

  getModel(id: string) {

    return this.http.get(`${this.API_URI}/kiosko/Modelo/${id}`);
  }

  getBatery(paramBatery: modelParamBatery) {
    return this.http.post(`${this.API_URI}/kiosko/bateria`, paramBatery);
  }


  putAudit(audit: modelAudit) {
    
    return this.http.post(`${this.API_URI}/kiosko/audit`, audit);
  }

  getItemPublicidad(){

    return this.http.get(`${this.API_URI}/kiosko/publicidad`);

  }

}

