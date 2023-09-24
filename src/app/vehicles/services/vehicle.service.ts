import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  vehicleList = {    
      LICENSE: '',
      VEHICLE_TYPE: [
        {name : 'Microbus', value : 'm'},
        {name : 'Car', value : 'c'},
        {name : 'Truck', value : 't'},
      ],
      VEHICLE_OWNER_NAME: '',
      VEHICLE_OWNER_PHONE: '',
      STATUS: [
        {name : 'In', value : 'i'},
        {name : 'Out', value : 'o'},
      ],
      ADDRESS: '',
      CAR_ENTRY_DATE: '',
      CAR_EXIT_DATE: '',
      PARKING_CHARGE: [
        {name : 'Microbus (200)', value : 200},
        {name : 'Car (120)', value : 120},
        {name : 'Truck (500)', value : 500},
      ],
      
  }

  setDataToLocalSTorage(data:any,name='vehicle_list'){
    localStorage.setItem(name,JSON.stringify(data));
  }

  getDataFromLocalStorage(name='vehicle_list'){
    return localStorage.getItem(JSON.parse(JSON.stringify(name)))
  }

  addList(formValue:any,name='added_list'){
    localStorage.setItem(name,JSON.stringify(formValue))
  }
  getList(name='added_list'){
    return localStorage.getItem(JSON.parse(JSON.stringify(name)))
  }

  yyyyMMDDDashFormat(date:any){
    let year = new Date(date).getFullYear();
    let month = new Date(date).getMonth();
    let day = new Date(date).getDate();

    return `${year}-${((month+1).toString().padStart(2,"0"))}-${day.toString().padStart(2,"0")}`
  }
}
