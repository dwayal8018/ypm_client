export class User {
    userID: number|null|undefined;
    username: string;
    prefferedName: string
    password: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: string;
    constructor() {
        this.userID= null;
        this.username= "";
        this.prefferedName= ""
        this.password= "";
        this.email= "";
        this.phoneNumber= "";
        this.address= "";
        this.role= "";
    }
}
