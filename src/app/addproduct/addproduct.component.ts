import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  giftName!:string;
  giftPrice!:number;
  imageUrl!:string;


  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.addProduct
  }
  addProduct(){
    const name=this.giftName;
    const price = this.giftPrice;
    const image=this.imageUrl;
    const giftObj={
          
      "giftName": name,
      "giftPrice":price,
      "imageUrl":image
    };
      const url="http://localhost:9000/product/save";
      this.http.post(url,giftObj).subscribe((res)=>{
        console.log(res);
        this.toastrService.success("successfully added Gift!!");
        //window.location.href=("/addproduct")
      },(err)=>{
        console.log(err);
        this.toastrService.error("Adding gift Failed.....");
      })
  }
}

