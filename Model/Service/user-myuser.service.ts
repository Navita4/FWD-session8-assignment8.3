import {Injectable} from '@angular/core';
import {Usermyuser} from '../Model/user.myuser';
@Injectable()
export class UsermyuserService{
    // Usermuuser array 
    usermyuserList:Array<Usermyuser>=new Array<Usermyuser>();

    // get myuser method
    getUsermyuser(){
        return this.usermyuserList=[
            {id:1 , title:"Mr."},
            {id:2 , title:"Mrs."}
        ]
    }
}