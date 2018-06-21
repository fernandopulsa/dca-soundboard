import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soundboard-item',
  templateUrl: './soundboard-item.component.html',
  styleUrls: ['./soundboard-item.component.scss']
})
export class SoundboardItemComponent implements OnInit {

  @Input() audioInfo;
  progressWidth;

  constructor() { 
    this.progressWidth='0%';
  }

  ngOnInit() {}

  audio = new Audio();

  public playAudio(){
    this.audio.src = this.audioInfo.url;
    this.audio.currentTime = 0.0;
    this.audio.load();
    this.audio.play();

    this.audio.addEventListener('timeupdate', () => this.progressBarGrow(this.audio.currentTime, this.audio.duration));
    this.audio.addEventListener('ended', () => this.progressWidth = '0%');
  }

  progressBarGrow(current, duration){
     const percent = (current / duration) * 100;
     this.progressWidth = `${percent}%`;
  }
  
 


}
