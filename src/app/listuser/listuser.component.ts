import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  users!:any;
getAllUsers()
{
  const url="http://localhost:9000/User/listUser";
  this.http.get(url).subscribe((res)=>{
    this.users = res;
  },err=>{
  }
  )
}
}