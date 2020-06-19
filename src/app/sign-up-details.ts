export class SignUpDetails {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
    rePassword: string;
    roles: string;
    currentLocation: string;
    completeAddress: string;
    pinCode: string;
    addressType: string;
    phoneNumber:string;
    userId:number;


    public get getFirstName() {
        return this.firstName;
    }

	public set setFirstName(firstName) {
    this.firstName = firstName;
}

	public get getLastName() {
    return this.lastName;
}

	public set setLastName(lastName) {
    this.lastName = lastName;
}

	public get getEmailId() {
    return this.emailId;
}

	public set setEmailId(emailId) {
    this.emailId = emailId;
}

	public get getPassword() {
    return this.password;
}

	public set setPassword(password) {
    this.password = password;
}

	public get getRoles() {
    return this.roles;
}

	public set setRoles(roles) {
    this.roles = roles;
}
public get getPhoneNumber(){
    return this.phoneNumber;
}
public set setPhoneNumber(phoneNumber){
    this.phoneNumber=phoneNumber;
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
public get getUserId() {
    return this.userId;
}

	public set setUserId(userId) {
    this.userId = userId;
}

}
