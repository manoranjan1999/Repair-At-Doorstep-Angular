export class AddProblem {
    productName: string;
    productType: string;
    companyName: string;
    modelNumber: string;
    description: string;
    userId: number;
    localDate: Date;

   


    currentLocation:string;
    pinCode:number;
    completeAddress:string;
    addressId:number;

    serviceRequestId: string;
    serviceProviderId: string;

    public get getServiceRequestId() {
        return this.serviceRequestId;
    }

	public set setServiceRequestId( serviceRequestId) {
    this.serviceRequestId = serviceRequestId;
}

	public get getServiceProviderId() {
    return this.serviceProviderId;
}

	public set setServiceProviderId( serviceProviderId) {
    this.serviceProviderId = serviceProviderId;
}



    public get getProductName() {
        return this.productName;
    }

	public set setProductName( productName) {
    this.productName = productName;
}

	public get getProductType() {
    return this.productType;
}

	public set setProductType( productType) {
    this.productType = productType;
}

	public get getCompanyName() {
    return this.companyName;
}

	public set setCompanyName(companyName) {
    this.companyName = companyName;
}

	public get getModelNumber() {
    return this.modelNumber;
}

	public set setModelNumber( modelNumber) {
    this.modelNumber = modelNumber;
}

	public get getDescription() {
    return this.description;
}

	public set setDescription( description) {
    this.description = description;
}

	public get getUserId() {
    return this.userId;
}

	public set setUserId(userId) {
    this.userId = userId;
}


    public get getCurrentLocation() {
        return this.currentLocation;
    }
    
        public set setCurrentLocation( currentLocation) {
        this.currentLocation = currentLocation;
    }
    
        public get getCompleteAddress() {
        return this.completeAddress;
    }
    
        public set setCompleteAddress( completeAddress) {
        this.completeAddress = completeAddress;
    }
    
        public get getPinCode() {
        return this.pinCode;
    }
    
        public set setPinCode( pinCode) {
        this.pinCode = pinCode;
    }
    public get getAddressId() {
        return this.addressId;
    }
    
        public set setAddressId( addressId) {
        this.addressId = addressId;
    }
    public get getDate() {
        return this.localDate;
    }

	public set setDate( localDate) {
    this.localDate = localDate;
}

}
