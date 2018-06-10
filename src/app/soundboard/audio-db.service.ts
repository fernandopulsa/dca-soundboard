import { Injectable } from '@angular/core';
import { AudioElement } from './audio.model';

@Injectable({
  providedIn: 'root'
})

export class AudioDbService {
  
  private audios:AudioElement[] = [
    new AudioElement(
      'Alerta Spoiler',
      '/assets/audios/alerta-spoiler.wav',
      'spoiler',
      'group',
      '01'
    ),
    new AudioElement(
      'Ciencia',
      '/assets/audios/ciencia_C_1.wav',
      'ciencia',
      'Carlos',
      '01'
    ),
    new AudioElement(
      'Ciencia',
      '/assets/audios/ciencia_CFJ_1.wav',
      'ciencia',
      'group',
      '01'
    ),
    new AudioElement(
      'Ciencia',
      '/assets/audios/ciencia_F_1.wav',
      'ciencia',
      'Fer',
      '01'
    ),
    new AudioElement(
      'Ciencia',
      '/assets/audios/ciencia_J_1.wav',
      'ciencia',
      'Jordi',
      '01'
    ),
    new AudioElement(
      'De Camino A',
      '/assets/audios/decaminoa_C_1.wav',
      'De Camino A',
      'Carlos',
      '01'
    ),
    new AudioElement(
      'De Camino A',
      '/assets/audios/decaminoa_CFJ_1.wav',
      'De Camino A',
      'group',
      '01'
    ),
    new AudioElement(
      'Empotrarte',
      '/assets/audios/emprotarte.wav',
      'Empotrarte',
      'Jordi',
      '01'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_C_1.wav',
      'Entrevista',
      'Carlos',
      '01'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_C_2.wav',
      'Entrevista',
      'Carlos',
      '02'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_F_1.wav',
      'Entrevista',
      'Fer',
      '01'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_F_2.wav',
      'Entrevista',
      'Fer',
      '02'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_F_3.wav',
      'Entrevista',
      'Fer',
      '03'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_J_1.wav',
      'Entrevista',
      'Jordi',
      '01'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_J_2.wav',
      'Entrevista',
      'Jordi',
      '02'
    ),
    new AudioElement(
      'Entrevista',
      '/assets/audios/entrevista_J_3.wav',
      'Entrevista',
      'Jordi',
      '03'
    ),
    new AudioElement(
      'El Filmmm',
      '/assets/audios/filmmm_J_1.wav',
      'peliculas',
      'Jordi',
      '03'
    ),
    new AudioElement(
      'Future is now',
      '/assets/audios/futurenow_C_1.wav',
      'futurenow',
      'Carlos',
      '01'
    ),
    new AudioElement(
      'Future is now',
      '/assets/audios/futurenow_C_2-wei.wav',
      'futurenow',
      'Carlos',
      '02'
    ),
    new AudioElement(
      'Future is now',
      '/assets/audios/futurenow_F_1.wav',
      'futurenow',
      'Fer',
      '01'
    ),
    new AudioElement(
      'Future is now',
      '/assets/audios/futurenow_J_1.wav',
      'futurenow',
      'Jordi',
      '01'
    ),
    new AudioElement(
      'Future is now',
      '/assets/audios/futurenow_J_2.wav',
      'futurenow',
      'Jordi',
      '02'
    ),
    new AudioElement(
      'La seccion',
      '/assets/audios/la_seccion.wav',
      'La seccion',
      'Fer',
      '01'
    ),
    new AudioElement(
      'Le llamariamos Bukake',
      '/assets/audios/le_llamariamos_bukake.wav',
      'bukake',
      'Jordi',
      '01'
    ),
    new AudioElement(
      'El Filmmm',
      '/assets/audios/lefilme_F_1.wav',
      'peliculas',
      'Fer',
      '01'
    ),
    new AudioElement(
      'Lo Recomiendo',
      '/assets/audios/lo_recomiendo.wav',
      'Lo recomiendo',
      'Fer',
      '01'
    ),

  ];

  constructor() { }

  getAudios(){
    return this.audios;
  }

}
