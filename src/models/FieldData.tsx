
export class FieldData {
    id: string;
    Name: string;
    Location: string;
    ExtentSize: string;
    Cam1: string;
    Cam2: string;
    LogId: string;
    constructor(id: string, Name: string, Location: string, ExtentSize: string, Cam1: string, Cam2: string, LogId: string) {
        this.id = id;
        this.Name = Name;
        this.Location = Location;
        this.ExtentSize = ExtentSize;
        this.Cam1 = Cam1;
        this.Cam2 = Cam2;
        this.LogId = LogId;
    }
}