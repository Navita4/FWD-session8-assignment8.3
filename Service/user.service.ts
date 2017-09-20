// import components
import {Injectable} from '@angular/core';
import {UserClass} from '../Model/user';
@Injectable()
export class Userdata{
    // userList Array
    userList:Array<UserClass>=new Array<UserClass>();
    //get user data
    getuserdata(){
        return this.userList=[]
    }
    // add user data
    addUserData(userDetail:UserClass){
        this.userList.unshift(userDetail);
    }
}