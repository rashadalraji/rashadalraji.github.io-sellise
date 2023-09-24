import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehicleService } from '../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {

  userId: any = '';
  constructor(
    public vehicleService: VehicleService,
    public route: ActivatedRoute,
    public router : Router,
    public toastrService :ToastrService
    ) {
    route.params.subscribe((params) => {
      this.userId = params["id"];
    });

    
  }

  model = {
    LICENSE: '',
    VEHICLE_TYPE: '',
    VEHICLE_OWNER_NAME: '',
    VEHICLE_OWNER_PHONE: '',
    STATUS: '',
    ADDRESS: '',
    CAR_ENTRY_DATE: '',
    CAR_EXIT_DATE: '',
    PARKING_CHARGE: '',
    TOTAL_SLOT: 100,
  }

  addedList: any = [];
  listData:any = [];
  
  ngOnInit(): void {
    let list = JSON.parse(JSON.stringify(this.vehicleService.getList('added_list')));
    this.addedList = JSON.parse(list);
    if(this.userId){
      
      this.listData = JSON.parse(list);
      
     
      let editableData = this.listData[this.userId - 1];
      this.model = editableData;
    }

    this.vehicleService.setDataToLocalSTorage(this.vehicleService.vehicleList);
    // this.addedList = JSON.parse(JSON.stringify(this.vehicleService.getList()))    
  }

  onClickAddNew(){
    this.model.LICENSE = '';
    this.model.VEHICLE_TYPE = '';
    this.model.VEHICLE_OWNER_NAME = '';
    this.model.VEHICLE_OWNER_PHONE = '';
    this.model.STATUS = '';
    this.model.ADDRESS = '';
    this.model.CAR_ENTRY_DATE = '';
    this.model.CAR_EXIT_DATE = '';
    this.model.PARKING_CHARGE = '';
  }

  onClickSave() {    
    Swal.fire({
      title: 'Do you want to save this data?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addedList.push(this.model)
        this.vehicleService.addList(this.addedList);
        this.toastrService.success('Data Saved successfuly','Success');
        // this.router.navigateByUrl('/vehicle-list');
      } else {
        // Keep the file
      }
    });
   
  }

  onClickUpdate(){
    if(this.listData && this.listData.length > 0){
      this.listData[this.userId - 1] = this.model;
      this.vehicleService.addList(this.listData);
      this.toastrService.success('Data Updated successfuly','Success');
      this.router.navigateByUrl('/vehicle-list')
    }
  }

} 
