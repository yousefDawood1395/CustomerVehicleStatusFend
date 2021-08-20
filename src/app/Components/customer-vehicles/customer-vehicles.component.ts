import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Customer } from 'src/Models/Customer';
import { Vehicle } from 'src/Models/Vehicle';
import { VehicleStatus } from 'src/Models/VehicleStatus';
import { CustomerService } from 'src/Services/customer.service';
import { SignalRService } from 'src/Services/signal-r.service';
import { VehicleService } from 'src/Services/vehicle.service';

@Component({
  selector: 'app-customer-vehicles',
  templateUrl: './customer-vehicles.component.html',
  styleUrls: ['./customer-vehicles.component.css']
})
export class CustomerVehiclesComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private vehicleService: VehicleService,
    public signalRService: SignalRService,
    private http: HttpClient
  ) {
  }

  customers:Customer [] =[]
  vehicles: Vehicle [] =[];
  status : VehicleStatus [] =[]; 
   hubConnection: any;

  ngOnInit() {
    // this.getAllCustomers();
    this.getAllVehicles();
    this.vehicles = this.signalRService.data;

    
  }

  private startHttpRequest = () => {
    this.signalRService.getVehiclesStatus().subscribe((res) => {
        this.status = res;
        console.log(res);
       this.vehicles = res;
      })
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
      console.log(this.customers);
    });
  }
  getAllVehicles() {
    this.vehicleService.getAllvehicles().subscribe((res) => {
      this.vehicles = res;
      console.log(this.vehicles);
      // this.signalRService.startConnection();
      this.startConnection();
      this.startHttpRequest();
    this.addTransferStatusDataListener();
    });
    
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:44385/status')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err:any)=> console.log('Error while starting connection: ' + err))
  }

  public addTransferStatusDataListener = () => {
    this.hubConnection.on('transferVehicleStatus', (data:any) => {
      this.vehicles = data.result;
      console.log(data.result);
    });
  }
}
