export class OrderDetails {
    serviceRequestId:string;
    partsId:string;
    partsName:string;
    price:string;
    serviceCharge:string;
    quantity:string;

    public get getServiceRequestId() {
        return this.serviceRequestId;
    }

    public set setServiceRequestId( serviceRequestId) {
        this.serviceRequestId = serviceRequestId;
    }

    public get getPartsId() {
        return this.partsId;
    }

    public set setPartsId( partsId) {
        this.partsId = partsId;
    }

    public get getPartsName() {
        return this.partsName;
    }

    public set setPartsName( partsName) {
        this.partsName = partsName;
    }

    public get getPrice() {
        return this.price;
    }

    public set setPrice( price) {
        this.price = price;
    }

    public get getServiceCharge() {
        return this.serviceCharge;
    }

    public set setServiceCharge( serviceCharge) {
        this.serviceCharge = serviceCharge;
    }

    public get getQuantity() {
        return this.quantity;
    }

    public set setQuantity( quantity) {
        this.quantity = quantity;
    }

}
