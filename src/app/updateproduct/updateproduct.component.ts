import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {


  gift:any;
  id!:number;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }
  ngOnInit(): void {
    this.findById();
  }
  findById(){
    const url="http://localhost:9000/products/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.gift = res;
    })
  }
  updateGiftProduct(){
    console.log(this.gift);
    const url="http://localhost:9000/product/"+this.id;
    this.http.put(url,this.gift).subscribe((res)=>{
      console.log(res);
      this.toastr.success(' Updated Successfully....');
    })
  }
}

