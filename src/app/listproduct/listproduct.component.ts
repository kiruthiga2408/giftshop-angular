import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  
    constructor(private http:HttpClient,private toastrService: ToastrService) { }
    ngOnInit(): void {
      this.displayAllGifts();
      this.remove;
      
    }
    gifts!:any;
    displayAllGifts(){
      const url="http://localhost:9000/product/listall";
        this.http.get(url).subscribe((res)=>{
          console.log(res);
          this.gifts= res;
        },err=>{
        }
        )
    }
    products!:any;
    giftItems:any;
    addToCart(products:any){
      this.giftItems.push(products);
      localStorage.setItem("CART_ITEMS", JSON.stringify(this.giftItems));
      this.toastrService.success("Add item to cart");
    }
  
    remove(id:any){
      let cfm = confirm("Do you want to delete ?");
      if(cfm){
        const url="http://localhost:9000/products/" + id;
        this.http.delete(url).subscribe((res)=>{
          console.log(res);
          this.toastrService.success('successfully deleted');
         window.location.href=("/listproduct")
          
        },(err)=>{
          this.toastrService.error('deletion is failed..');
        }
        )
      }
    }
  }
  
  
  
  
  
  

