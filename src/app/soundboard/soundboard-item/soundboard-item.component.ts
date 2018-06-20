import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soundboard-item',
  templateUrl: './soundboard-item.component.html',
  styleUrls: ['./soundboard-item.component.scss']
})
export class SoundboardItemComponent implements OnInit {

  @Input() audioInfo;

  constructor() { }

  ngOnInit() {}

  audio = new Audio();

  public playAudio(){
    this.audio.src = this.audioInfo.url;
    this.audio.currentTime = 0.0;
    this.audio.load();
    this.audio.play();
  }

}
