import { Injectable } from '@angular/core';
import { AudioElement } from './audio.model';

@Injectable({
  providedIn: 'root'
})

export class AudioDbService {
  
  private audios:AudioElement[] = [
    new AudioElement('test1', '/assets/audios/musqueta_J_1.wav')
  ];

  constructor() { }

  getAudios(){
    return this.audios;
  }



}
