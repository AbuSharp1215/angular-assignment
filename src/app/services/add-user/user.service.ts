import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  data:Array<any>;
  constructor() { 
    this.data =[];
  }

  storeUser(obj:any){

    this.data.push(obj);
    
    sessionStorage.setItem("User Record", JSON.stringify(this.data));

    return JSON.parse(sessionStorage.getItem("User Record"));
  }

  getUserList(){
    var s = JSON.parse(sessionStorage.getItem("User Record"));
    if(s!=null){
      return s;
    }
    return [];
  }
}
