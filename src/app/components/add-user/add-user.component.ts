import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/add-user/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  success:boolean;
  error:boolean;

  constructor(private userService:UserService) {
    this.success = false;
    this.error = false;
    this.data = userService.getUserList();
   }

  userform = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(1)]),
    email: new FormControl('',[Validators.required, Validators.minLength(10)]),
    date: new FormControl('',[Validators.required])
  });


  ngOnInit(): void {

  }

  data:Array<any>;

  onSubmit(){
    // Form Validation Check
    if(this.userform.invalid){
      //alert("Validation Error");
      this.error = true;
      this.success = false;
    }
    else {
      this.error = false;
      this.storeData();
    }
    
  }

  storeData(){
    
    console.log(this.userform.value);
    this.data = this.userService.storeUser(this.userform.value);
    this.success = true;
    this.userform.reset();


    //console.log( _.sortBy(this.data, ['phone']))

    //this.getData();
  }

  sortbyEmail(){
    this.success = false;
    this.error = false;
    this.data =  _.sortBy(this.data, ['email']);
  }

  sortbyDate(){
    this.success = false;
    this.error = false;
    this.data =  _.sortBy(this.data, ['date']);
  }

  sortbyfirstname(){
    this.success = false;
    this.error = false;
    this.data =  _.sortBy(this.data, ['firstname']);
  }

  sortbylastname(){
    this.success = false;
    this.error = false;
    this.data =  _.sortBy(this.data, ['lastname']);
  }

  
  // getData(){
  //   this.data = [JSON.parse(sessionStorage.getItem("User Records"))];
  // }
}
