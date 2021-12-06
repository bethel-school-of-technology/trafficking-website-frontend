import { Injectable } from '@angular/core';
import { StaticTestimonial } from '../models/static-testimonial';
@Injectable({
  providedIn: 'root'
})
export class StaticTestimonialService {
  staticTestimonial: StaticTestimonial []=[
    
    {
      title: "Tonya",
      synopsis: "Tonya spent night after night in different hotel rooms, with different men, all at the command of someone she once trusted. She was held against her will, beaten and made to feel like she had no other option at the time, all by the man she thought she loved.",
      url:"https://www.ice.gov/features/human-trafficking-victim-shares-story"
    },
    {
      title:"Sarah",
      synopsis: "One summer night, Sarah left her job at a local fast-food restaurant with someone she thought was a friend, a woman her boyfriend had introduced her to a few weeks before. Sarah’s boyfriend seemed to have money, but no job. No matter. He treated her better than any other boyfriend she’d had before. She fell for him quickly.",
      url:"https://deliverfund.org/the-human-trafficking-problem-in-america/stories-from-survivors/"
    },
    {
      title: "Luiza",
      synopsis:"When she was 22 years old, Luiza Karimova left her home in Uzbekistan and travelled to Osh, Kyrgyzstan with the hopes of finding work. However, without a Kyrgyz ID or university degree, Karimova struggled to find employment. When a woman offered her a waitressing job in Bishkek, the capital city in the north of Kyrgyzstan, she welcomed the opportunity.",
      url:"https://www.unwomen.org/en/news/stories/2019/7/compilation-trafficking-survivors-share-stories"
    }
]

  constructor() { }
}
