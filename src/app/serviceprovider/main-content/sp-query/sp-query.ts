export class SpQuery {
    serviceProviderId : number;
    serviceProviderName : String;
    spEmail : String;
    queryTitle : String;
    query : String;
    queryDate : Date;
    isSolved : boolean;
    
    constructor(serviceProviderId : number, serviceProviderName : String, spEmail : String, queryTitle : String, query : String, queryDate : Date, isSolved : boolean) {
        this.serviceProviderId = serviceProviderId;
        this.serviceProviderName = serviceProviderName;
        this.spEmail = spEmail;
        this.queryTitle = queryTitle;
        this.query = query;
        this.queryDate = queryDate; 
        this.isSolved = isSolved;
    }
}
