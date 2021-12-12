import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Public/home/home.component';
import { OrganizationsComponent } from './Pages/Public/organizations/organizations.component';
import { LoginComponent } from './Pages/Public/login/login.component';
import { SignUpComponent } from './Pages/Public/sign-up/sign-up.component';
import { TestimonialsComponent } from './Pages/Public/testimonials/testimonials.component';
import { ProfilePageComponent } from './Pages/Public/profile-page/profile-page.component';
import { AdminComponent } from './Pages/Public/admin/admin.component';


 const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  //localhost:4200
  {path: "home", component: HomeComponent},
  //localhost:4200/organizations
  {path: "organizations", component: OrganizationsComponent},
  //localhost:4200/login
  {path: "login", component: LoginComponent},
  //localhost:4200/signup
  {path: "signup", component: SignUpComponent},
  //localhost:4200/testimonials
  {path: "testimonials", component: TestimonialsComponent},
  //localhost:4200/profile
  {path: "profile", component: ProfilePageComponent},
  //localhost:4200/admin
  {path: "admin", component: AdminComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
