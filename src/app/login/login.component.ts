import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    const userObj={"email":this.email,"password":this.password};
    
   const url="http://localhost:9000/users/login";
   this.http.post(url,userObj).subscribe((res)=>{
     console.log(res);
     this.toastrService.success('Logged In!!');
     
   },(err)=>{
     console.log(err);
     //alert("please  register again..!");
     this.toastrService.error('Invalid Crediantals!!');
   })
  }
 

}
