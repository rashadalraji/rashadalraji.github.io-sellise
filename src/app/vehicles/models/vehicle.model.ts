

export class Vehicle {

    LICENSE: String
    VEHICLE_TYPE: String
    VEHICLE_OWNER_NAME: string
    VEHICLE_OWNER_PHONE: string
    STAUS: string
    ADDRESS: Date
    CAR_ENTRY_DATE: Date
    CAR_EXIT_DATE: Date
    PARKING_CHARGE: string
    


    constructor(options: any = {}) {
        // super(options);
        this.LICENSE = options.LICENSE || '';
        this.VEHICLE_TYPE = options.VEHICLE_TYPE || '';
        this.VEHICLE_OWNER_NAME = options.VEHICLE_OWNER_NAME || '';
        this.VEHICLE_OWNER_PHONE = options.VEHICLE_OWNER_PHONE || '';
        this.STAUS = options.STAUS || '';
        this.ADDRESS = options.ADDRESS || '';
        this.PARKING_CHARGE = options.PARKING_CHARGE || '';
        this.CAR_ENTRY_DATE = options.CAR_ENTRY_DATE ? new Date(options.CAR_ENTRY_DATE) : new Date();
        this.CAR_EXIT_DATE = options.CAR_EXIT_DATE ? new Date(options.CAR_EXIT_DATE) : new Date();
        
    }
}
