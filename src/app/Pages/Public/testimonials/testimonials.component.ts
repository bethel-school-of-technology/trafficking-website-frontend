import { Component, OnInit } from '@angular/core';
import { Testimony } from 'Models/testimony';
import { TestimonyService } from 'src/app/Services/testimony.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  listoftestimonies: Testimony[]= []
  constructor(private testimonyservice: TestimonyService) { }

  ngOnInit(): void {
    this.testimonyservice.getAllTestimonies().subscribe(response =>{
      console.log(response)
      this.listoftestimonies=response;
    })
  }

}
