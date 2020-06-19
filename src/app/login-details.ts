export class LoginDetails {
    emailId:string;
    password:string;
    roles:string;
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
}
