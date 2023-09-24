import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
 
  constructor(public vehicleService:VehicleService,
    public toastrService :ToastrService,
    public router: Router){

 }

 listData:any = []

 ngOnInit(): void {
   let list = JSON.parse(JSON.stringify(this.vehicleService.getList('added_list')));
   this.listData = JSON.parse(list)
   console.log(this.listData)
 }

 onClickEdit(index:number){
  this.router.navigate(['vehicle-add',index])
 }

 onClickDelete(index:number){
  Swal.fire({
    title: 'Do you want to delete this data?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      this.listData.splice(index,1)
      this.vehicleService.addList(this.listData);
      this.toastrService.success('Data Saved successfuly','Success');
      // this.router.navigateByUrl('/vehicle-list');
    } else {
      // Keep the file
    }
  });
 }
  
}
