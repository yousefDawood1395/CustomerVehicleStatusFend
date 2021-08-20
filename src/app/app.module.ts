import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerVehiclesComponent } from './Components/customer-vehicles/customer-vehicles.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';


const routes : Routes =
[
  {path:'',component:CustomerVehiclesComponent,pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CustomerVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
