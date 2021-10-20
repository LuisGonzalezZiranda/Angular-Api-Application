import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent{

  constructor(private serviceService: ServiceService) {
    this.serviceService.searchPeliculas();
   }

  get peliculas(){
    return this.serviceService.results;
  } 


}
