import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  contactNumber!: string;

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    
  }
  register() {
   const userObj={"name":this.name,"email":this.email,"password":this.password,"contactNumber":this.contactNumber};
   
  const url="http://localhost:9000/User/save";
  this.http.post(url,userObj).subscribe((res)=>{
    console.log(res);
    //alert("Registration is Successful!!");
    this.toastrService.success('Registration is Successful!!');
    
  },(err)=>{
    console.log(err);
    //alert("please  register again..!");
    this.toastrService.error('unsuccessful Registration!!');
  })
}
}