import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/Models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _http:HttpClient) { }
  apiUrl = "https://localhost:44385/api/Vehicles";

  getAllvehicles(){
    return this._http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(id:number){
    return this._http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  addVehicle(vehicle : Vehicle){
    return this._http.post(this.apiUrl,vehicle);
  }

  updateVehicle(id:number , vehicle:Vehicle){
    return this._http.put(`${this.apiUrl}/${id}`,vehicle);
  }

  deleteVehicle(id:number){
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
}
