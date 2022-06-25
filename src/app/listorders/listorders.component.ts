import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/myorder/auth/auth.service';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService, private authService:AuthService) { }
  id!:any;
  ngOnInit(): void {
    this.getAllOrders() 
  }
  orders!:any;
   getAllOrders(){
      this.id = this.authService.getUser()?.id;
    //  alert(this.id);
     const url="https://order-apii.herokuapp.com/ordersTable/list";
   
     this.http.get(url).subscribe((res)=>{
      this. orders = res;
    },err=>{
    }
    )
   }
}
