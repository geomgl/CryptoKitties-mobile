import { MyCharity } from "./myCharity";
import { Donation } from "./donation";


export class User{
id: string = "";
firstName: string = "";
lastName: string = "";
username: string = "";
email: string = "";
password: string = "";
profile_pic: string = "";
newArray: Array<Donation> = [];
myCharities: Array<MyCharity> = [];

}