import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private ServiceService: ServiceService,
  ) {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.ServiceService.searchMoviebyId(id);
  }

}
