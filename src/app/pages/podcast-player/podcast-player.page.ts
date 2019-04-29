import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../../services/podcast.service';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-podcast-player',
  templateUrl: './podcast-player.page.html',
  styleUrls: ['./podcast-player.page.scss'],
})
export class PodcastPlayerPage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private results: PodcastService, private streamingMedia: StreamingMedia) { }


  startAudio() {
    const options: StreamingAudioOptions = {
      initFullscreen: false
      };

    // tslint:disable-next-line:max-line-length
    this.streamingMedia.playAudio('http://planetjesus.s3.us-east-2.amazonaws.com/uploads/67650be7-4e8d-4e76-8ab1-b3e0f73cdf27/PJ_190223_Episode_10 (1).mp3', options);
    // console.log(this.information.episode_url);
  }

  stopAudio() {
    this.streamingMedia.stopAudio();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.results.getDetails(id).subscribe(data => {
      console.log('details: ', data);
      this.information = data;
    });
  }

}
