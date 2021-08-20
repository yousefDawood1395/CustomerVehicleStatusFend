import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Vehicle } from 'src/Models/Vehicle';
import { VehicleStatus } from 'src/Models/vehicleStatus';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

   hubConnection: any;
   data : Vehicle[] = [];

  
  constructor(private _http:HttpClient) {
   }
  apiUrl = "https://localhost:44385/api/Vehicles";


   getVehiclesStatus(){
    return this._http.get<Vehicle[]>(`${this.apiUrl}/getVehicleStatus`);
  }


  
}
