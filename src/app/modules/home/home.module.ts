import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/Pages/Public/home/home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HomeComponent
  ],
  exports: [HomeModule]
})
export class HomeModule { 

}
