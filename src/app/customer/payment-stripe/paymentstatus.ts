export class PaymentStatus {
  srId : number;
  transactionId : String;
  grandTotal : number;
  status : boolean;

  constructor (srId : number, transactionId : String, grandTotal : number, status : boolean) {
    this.srId = srId;
    this.transactionId = transactionId;
    this.grandTotal = grandTotal;
    this.status = status; 
  }
}