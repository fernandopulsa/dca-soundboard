import { Component, OnInit } from '@angular/core';

import { AudioDbService } from './audio-db.service';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})

export class SoundboardComponent implements OnInit {

  public audios;
  public categories;

  constructor(private audioDb:AudioDbService) { }

  ngOnInit() {
    this.audios = this.audioDb.getAudios()
    this.categories = this.audioDb.getCategories()
  }
}
