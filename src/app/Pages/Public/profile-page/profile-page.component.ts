import { Component, OnInit } from '@angular/core';
import { Testimonals } from 'src/app/models/testimonals';
import { TestimoniesService } from 'src/app/services/testimonies.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  listOfPosts: TestimoniesService[] = []
  constructor(private TestimoniesService: TestimoniesService) { }

  ngOnInit(): void {

    this.TestimoniesService.getAllTestimonies().subscribe(response=>{
      console.log(response)
    })

  }

}
