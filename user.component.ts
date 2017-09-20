// import required component
import {Component,Injectable} from '@angular/core';
import {UserClass} from './Model/user';
import {UserData} from './Service/user.service';
import {UserMyUser} from './Model/user.myuser';
import {UserMyUserService} from './Service/user-myuser.service';
@Component({
    selector:'user-app',
    templateUrl:'./View/user.component.html',
    providers:[UserData] // service called in component providers
})
export class UserComponent{
    //logic 
    currentUser:UserClass=new UserClass();
    // userList Array
    userList:Array<UserClass>=new Array<UserClass>();
    //user myuser list array
    UserMyUserList:Array<UserMyUser>=new Array<UserMyUser>();
    constructor(private _userData,private _usermyuser:UserMyUserService){}

    ngOnInit(){
        this.userList=this._userData.getUserData();
        this.UserMyUserList=this._usermyuser.getUserMyUser();

    }
    adduser(){
        this._userData.addUserData(this.currentUser);
        this.currentUser=new UserClass();//clear all onces new user created
    }

}
