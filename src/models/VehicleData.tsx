export class VehicleData {
    id: string;
    PlateNumber: string;
    Category: string;
    status: string;
    FuelType: string;
    staffId: string;

    constructor(id: string, PlateNumber: string, Category: string, status: string, FuelType: string, staffId: string) {
        this.id = id;
        this.PlateNumber = PlateNumber;
        this.Category = Category;
        this.status = status;
        this.FuelType = FuelType;
        this.staffId = staffId;
    }
}
