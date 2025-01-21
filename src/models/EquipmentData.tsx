export class Equipmentdata {
    id: string;
    Name: string;
    Status: string;
    Type: string;
    FieldId: string;
    staffId: string;
 constructor(id: string, Name: string, Status: string, Type: string, FieldId: string, staffId: string) {
     this.id = id;
     this.Name = Name;
     this.Status = Status;
     this.Type = Type;
     this.FieldId = FieldId;
     this.staffId = staffId;
 }
   
}
