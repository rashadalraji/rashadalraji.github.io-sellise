import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
 
  constructor(public vehicleService:VehicleService){

  }

  model = {
    Date: '',
    Total_car: '',
    Empty_slot: '',
    Vehicle_type: '',
    
  }
  listData:any = [];

  totalCarsParked = 0;
  emptySlot = 0;
  microbus = 0;
  car = 0;
  truck = 0;

  ngOnInit(): void {
    
    this.model.Date = this.vehicleService.yyyyMMDDDashFormat(new Date())
    let list = JSON.parse(JSON.stringify(this.vehicleService.getList('added_list')));
    this.listData = JSON.parse(list);
    this.onClickFilter()
  }

  onClickFilter(){    
    
    if(this.model.Date){
      this.listData.forEach((element:any) => {
        element.CAR_ENTRY_DATE = element.CAR_ENTRY_DATE.split('T')[0];
        element.CAR_EXIT_DATE = element.CAR_EXIT_DATE.split('T')[0];
        element.TOTAL_SLOT = 100;
        return element
      });

     
      this.listData = this.listData.filter((el:any)=>el.CAR_ENTRY_DATE == this.model.Date)
      
      for(var i = 0; i < this.listData.length; i++){
        if(this.listData[i].STATUS = "i"){
          this.totalCarsParked += 1;
           
        }
        if(this.listData[i].VEHICLE_TYPE = 'm'){
          this.microbus += 1;
        }
        if(this.listData[i].VEHICLE_TYPE = 'c'){
          this.car += 1;
        }
        if(this.listData[i].VEHICLE_TYPE = 't'){
          this.truck += 1;
        }
      }
     this.emptySlot = this.listData[0].TOTAL_SLOT - this.totalCarsParked;
    }
    
  }
 
  
}
