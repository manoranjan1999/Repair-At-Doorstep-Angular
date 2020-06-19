export class TechnicianDetails {
serviceRequestId: string;
technicianId: string;

    public get getServiceRequestId() {
        return this.serviceRequestId;
    }

	public set setServiceRequestId( serviceRequestId) {
    this.serviceRequestId = serviceRequestId;
}

	public get getTechnicianId() {
    return this.technicianId;
}

	public set setTechnicianId( technicianId) {
    this.technicianId = technicianId;
}
}
