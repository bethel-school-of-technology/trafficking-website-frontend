import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Public/home/home.component';
import { OrganizationsComponent } from './Pages/Public/organizations/organizations.component';
import { LoginComponent } from './Pages/Public/login/login.component';
import { SignUpComponent } from './Pages/Public/sign-up/sign-up.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';


 const routes: Routes = [
  { path: "", redirectTo: "Home" },
  //localhost:4200
  {path: "home", component: HomeComponent},
  //localhost:4200/organizations
  {path: "organizations", component: OrganizationsComponent},
  //localhost:4200/login
  {path: "login", component: LoginComponent},
  //localhost:4200/signup
  {path: "signup", component: SignUpComponent},
  //localhost:4200/testimonials
  {path: "testimonials", component: TestimonialsComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
