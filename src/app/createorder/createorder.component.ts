import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/myorder/auth/auth.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {
  userId!:number;
  amount!:number;
  applyCoupon!:number;
  status:String="ordered";
  createdBy!:number;
  comments!:String;
  discountPercentage:number =0;
  totalAmount:number =0;
  couponCode!:number;
  productId!:number;
  quantity!:number;


  constructor(private http:HttpClient,private toastrService: ToastrService,private route:ActivatedRoute,private authService:AuthService
    ) {
    this.amount = +this.route.snapshot.queryParams["amount"];
    this.userId=this.authService.getUser()?.id;
   }
      id!:any;

  ngOnInit(): void {
  }
  orders!:any;
  getTotalAmount(){
    let amount = 0;
    
      amount = this.amount - this.discount();
         
    return amount;
  }

    createOrder(){
    this.id = this.authService.getUser()?.id;

    const orderobj={"userId":this.id,"amount":this.amount,"status":this.status,"createdBy":this.createdBy,"comments":this.comments};
    const url= "https://order-apii.herokuapp.com/ordersTable/save";
    this.http.post(url,orderobj).subscribe((res)=>{
      console.log(res);
      this.reduceStock();
      this.toastrService.success('successfully added');
      let orderId = 1; //res;
      
     
      
    },(err)=>{
      console.log(err);
      this.toastrService.error('invalid credentails')
    });
 }

 applyCouponCode(){
   this.discountPercentage=0;
  this.id = this.authService.getUser()?.id;

  //const orderobj={"userId":this.id,"amount":this.amount,"status":this.status,"createdBy":this.createdBy,"comments":this.comments};
  const url= "https://couponapp-apii.herokuapp.com/coupon/apply-code?couponCode="+this.couponCode;
  this.http.get(url).subscribe((res:any)=>{
    console.log(res);
    this.discountPercentage=res;
    //this.toastrService.success('successfully added');
   
    //localStorage.removeItem("CART_ITEMS");
  },(err)=>{
    console.log(err);
    this.toastrService.error(err.error.message);
  });
}

reduceStock(){
  let items= localStorage.getItem("CART_ITEMS");
    let products = items != null ? JSON.parse(items):[];
  let stockobj=[];
  for(let product of products){
    const obj = {"productId": product.id,"quantity":1};
    stockobj.push(obj);
    //stockobj = obj;
  }
  const url="https://stockapp-apii.herokuapp.com/stock/reduce/bulk";
  this.http.post(url,stockobj).subscribe((res:any)=>{
    console.log(res);
    localStorage.removeItem("CART_ITEMS");
    let orderId =1;
    window.location.href="/cardpayment/" + orderId +"/" + this.amount;

},(err)=>{
  console.log(err);
  this.toastrService.error(err.error.message);
});
}

 discount(){
   let discountAmount =(this.discountPercentage*(this.amount)/100);
   return discountAmount;

 }
  }

