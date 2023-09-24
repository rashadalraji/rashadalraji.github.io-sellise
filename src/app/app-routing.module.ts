import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleAddComponent } from './vehicles/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { DashboardComponent } from './vehicles/dashboard/dashboard.component';

const routes: Routes = [
  
  // { path: '', redirectTo: 'forms/vm_1001', pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'vehicle-add', component:VehicleAddComponent },
  { path: 'vehicle-add/:id', component:VehicleAddComponent },
  { path: 'vehicle-list', component:VehicleListComponent },
  { path: 'dashboard', component:DashboardComponent },
  
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
