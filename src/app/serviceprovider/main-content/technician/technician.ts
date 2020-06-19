export class Technician {
    serviceProviderId : number;
    firstName : String;
    lastName : String;
    qualification : String;
    email : String;
    phone_Number : number;
    address : String;
    
    constructor(spId:number) {
        this.serviceProviderId = spId;
    }
}