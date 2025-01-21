export class StaffData {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joiningDate: string;
    dob: string;
    address: string;
    phoneNumber: string;
    email: string;
    LogId: string;
    constructor(id: string, role: string,firstName: string, lastName: string, designation: string, gender: string, joiningDate: string, dob: string, address: string, phoneNumber: string, email: string, LogId: string) {
        this.id = id;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joiningDate = joiningDate;
        this.dob = dob;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.LogId = LogId;
    }
}