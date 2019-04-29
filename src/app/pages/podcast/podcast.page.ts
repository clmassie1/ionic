import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PodcastService } from '../../services/podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage implements OnInit {

  podcasts: any;

  constructor(private results: PodcastService) { }

  ngOnInit() {
    this.results.getPodcasts().subscribe(data => {
      this.podcasts = data;
      console.log(this.podcasts);
    });
  }

}
