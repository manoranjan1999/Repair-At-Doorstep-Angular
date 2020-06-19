export class ServiceProvider {
    serviceProviderName: string;
    emailId: string;
    productType: string;
    productName: string;
    currentLocation: string;
    completeAddress: string;
    pinCode: string;
    addressType: string;
    serviceProviderId:string;
    public get getServiceProviderId() {
        return this.serviceProviderId;
    }

	public set setServiceProviderId(serviceProviderId) {
    this.serviceProviderId = serviceProviderId;
}


    public get getServiceProviderName() {
        return this.serviceProviderName;
    }

	public set setServiceProviderName(serviceProviderName) {
    this.serviceProviderName = serviceProviderName;
}

	public get getEmailId() {
    return this.emailId;
}

	public set setEmailId(emailId) {
    this.emailId = emailId;
}

	public get getProductType() {
    return this.productType;
}

	public set setProductType(productType) {
    this.productType = productType;
}

	public get getProductName() {
    return this.productName;
}

	public set setProductName(productName) {
    this.productName = productName;
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

	public get getAddressType() {
    return this.addressType;
}

	public set setAddressType( addressType) {
    this.addressType = addressType;
}


}
