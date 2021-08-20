import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/Models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }
  apiUrl = "https://localhost:44385/api/Customers";

  getAllCustomers(){
    return this._http.get<Customer[]>(this.apiUrl);
  }

  getCustomerById(id:number){
    return this._http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  addCustomer(customer : Customer){
    return this._http.post(this.apiUrl,customer);
  }

  updateCustomer(id:number , customer:Customer){
    return this._http.put(`${this.apiUrl}/${id}`,customer);
  }

  deleteCustomer(id:number){
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
}
