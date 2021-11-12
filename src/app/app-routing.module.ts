import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "Home" }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
