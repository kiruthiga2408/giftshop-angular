import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ListgiftsComponent } from './listgifts/listgifts.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { SupportComponent } from './support/support.component';
import { MyorderComponent } from './myorder/myorder.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ListordersComponent } from './listorders/listorders.component';
import { CreatereviewComponent } from './createreview-review/createreview/createreview.component';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './admin/user/user.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'order',component:OrderComponent},
  {path:'view-user',component:ViewUserComponent}, 
  {path:'listgifts',component:ListgiftsComponent}, 
  {path:'addproduct',component:AddproductComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'listuser',component:ListuserComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'view-user',component:ViewUserComponent,canActivate:[AuthGuard]},
  {path:'support',component:SupportComponent},
  {path:'myorder',component:MyorderComponent},
  {path:'createorder',component:CreateorderComponent},
  {path:'listorders',component:ListordersComponent},
  {path:'createreview',component:CreatereviewComponent},
  {path:'admin',component:AdminModule},
  {path:'user',component:UserModule},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
