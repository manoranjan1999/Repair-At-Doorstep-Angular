export class VisitingDetails {
    serviceRequestId: string;
    visitingMessage: string;

    public get getServiceRequestId() {
        return this.serviceRequestId;
    }

	public set setServiceRequestId( serviceRequestId) {
    this.serviceRequestId = serviceRequestId;
}

	public get getVisitingMessage() {
    return this.visitingMessage;
}

	public set setVisitingMessage( visitingMessage) {
    this.visitingMessage = visitingMessage;
}
}
