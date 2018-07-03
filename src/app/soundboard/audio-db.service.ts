import { Injectable } from '@angular/core';
import { AudioElement } from './audio.model';

@Injectable({
  providedIn: 'root'
})
export class AudioDbService {
  private audios: AudioElement[] = [
    new AudioElement('Alerta Spoiler', '/assets/audios/alerta-spoiler.wav', 'shot', 'group', '01'),
    new AudioElement('Ciencia', '/assets/audios/ciencia_C_1.wav', 'ciencia', 'Carlos', '01'),
    new AudioElement('Ciencia', '/assets/audios/ciencia_CFJ_1.wav', 'ciencia', 'group', '01'),
    new AudioElement('Ciencia', '/assets/audios/ciencia_F_1.wav', 'ciencia', 'Fer', '01'),
    new AudioElement('Ciencia', '/assets/audios/ciencia_J_1.wav', 'ciencia', 'Jordi', '01'),
    new AudioElement('De Camino A', '/assets/audios/decaminoa_C_1.wav', 'De Camino A', 'Carlos', '01'),
    new AudioElement('De Camino A', '/assets/audios/decaminoa_CFJ_1.wav', 'De Camino A', 'group', '01'),
    new AudioElement('Empotrarte', '/assets/audios/emprotarte.wav', 'shot', 'Jordi', '01'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_C_1.wav', 'Entrevista', 'Carlos', '01'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_C_2.wav', 'Entrevista', 'Carlos', '02'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_F_1.wav', 'Entrevista', 'Fer', '01'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_F_2.wav', 'Entrevista', 'Fer', '02'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_F_3.wav', 'Entrevista', 'Fer', '03'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_J_1.wav', 'Entrevista', 'Jordi', '01'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_J_2.wav', 'Entrevista', 'Jordi', '02'),
    new AudioElement('Entrevista', '/assets/audios/entrevista_J_3.wav', 'Entrevista', 'Jordi', '03'),
    new AudioElement('El Filmmm', '/assets/audios/filmmm_J_1.wav', 'peliculas', 'Jordi', '03'),
    new AudioElement('Future is now', '/assets/audios/futurenow_C_1.wav', 'futurenow', 'Carlos', '01'),
    new AudioElement('Future is now', '/assets/audios/futurenow_C_2-wei.wav', 'futurenow', 'Carlos', '02'),
    new AudioElement('Future is now', '/assets/audios/futurenow_F_1.wav', 'futurenow', 'Fer', '01'),
    new AudioElement('Future is now', '/assets/audios/futurenow_J_1.wav', 'futurenow', 'Jordi', '01'),
    new AudioElement('Future is now', '/assets/audios/futurenow_J_2.wav', 'futurenow', 'Jordi', '02'),
    new AudioElement('La seccion', '/assets/audios/la_seccion.wav', 'La seccion', 'Fer', '01'),
    new AudioElement('Le llamariamos Bukake', '/assets/audios/le_llamariamos_bukake.wav', 'shot', 'Jordi', '01'),
    new AudioElement('El Filmmm', '/assets/audios/lefilme_F_1.wav', 'peliculas', 'Fer', '01'),
    new AudioElement('Lo Recomiendo', '/assets/audios/lo_recomiendo.wav', 'shot', 'Fer', '01'),
    new AudioElement('Me corro en tu cara', '/assets/audios/me_corro_en_tu_cara.wav', 'shot', 'Carlos', '01'),
    new AudioElement('Musiqueta de la buena', '/assets/audios/musqueta_F_1.wav', 'musica', 'Fer', '01'),
    new AudioElement('Musiqueta de la buena', '/assets/audios/musqueta_F_2.wav', 'musica', 'Fer', '02'),
    new AudioElement('Musiqueta de la buena', '/assets/audios/musqueta_F_3.wav', 'musica', 'Fer', '03'),
    new AudioElement('Musiqueta de la buena', '/assets/audios/musqueta_J_1.wav', 'musica', 'Jordi', '01'),
    new AudioElement('Musiqueta de la buena', '/assets/audios/musqueta_J_2.wav', 'musica', 'Jordi', '02'),
    new AudioElement('Netflix', '/assets/audios/netflix_F_1.wav', 'netflix', 'Fer', '01'),
    new AudioElement('La Pelicula', '/assets/audios/pelicula_C_1.wav', 'peliculas', 'Carlos', '01'),
    new AudioElement('La Pelicula', '/assets/audios/pelicula_F_1.wav', 'peliculas', 'Fer', '01'),
    new AudioElement('La Pelicula', '/assets/audios/pelicula_J_1.wav', 'peliculas', 'Jordi', '01'),
    new AudioElement('La Pelicula', '/assets/audios/pelicula_FJ_1.wav', 'peliculas', 'group', '01'),
    new AudioElement('Podcasting', '/assets/audios/podcasting_C_1.wav', 'Podcasting', 'Carlos', '01'),
    new AudioElement('Podcasting', '/assets/audios/podcasting_F_1.wav', 'Podcasting', 'Fer', '01'),
    new AudioElement('Podcasting', '/assets/audios/podcasting_F_2.wav', 'Podcasting', 'Fer', '02'),
    new AudioElement('La Psicologia', '/assets/audios/psico_C_1.wav', 'psicologia', 'Carlos', '01'),
    new AudioElement('La Psicologia', '/assets/audios/psico_C_2.wav', 'psicologia', 'Carlos', '02'),
    new AudioElement('La Psicologia', '/assets/audios/psico_F_1.wav', 'psicologia', 'Fer', '01'),
    new AudioElement('La Psicologia', '/assets/audios/psico_J_1.wav', 'psicologia', 'Jordi', '01'),
    new AudioElement('La Psicologia', '/assets/audios/psico_J_2.wav', 'psicologia', 'Jordi', '01'),
    new AudioElement('La Psicologia', '/assets/audios/psico_FC_1.wav', 'psicologia', 'group', '01'),
    new AudioElement('Un recomendar', '/assets/audios/recomendar_C_1.wav', 'Un recomendar', 'Carlos', '01'),
    new AudioElement('Un recomendar', '/assets/audios/recomendar_C_2.wav', 'Un recomendar', 'Carlos', '02'),
    new AudioElement('Un recomendar', '/assets/audios/recomendar_F_1.wav', 'Un recomendar', 'Fer', '01'),
    new AudioElement('Un recomendar', '/assets/audios/recomendar_F_2.wav', 'Un recomendar', 'Fer', '02'),
    new AudioElement('Review', '/assets/audios/review_C_1.wav', 'Review', 'Carlos', '01'),
    new AudioElement('Review', '/assets/audios/review_C_2.wav', 'Review', 'Carlos', '02'),
    new AudioElement('Review', '/assets/audios/review_C_3.wav', 'Review', 'Carlos', '03'),
    new AudioElement('Review', '/assets/audios/review_J_1.wav', 'Review', 'Jordi', '01'),
    new AudioElement('La seccion Alba', '/assets/audios/secion_Alba_C_1.wav', 'La seccion', 'Carlos', '01'),
    new AudioElement('La seccion Alba', '/assets/audios/secion_Yas_J_2.wav', 'La seccion', 'Jordi', '01'),
    new AudioElement('La seccion Alba', '/assets/audios/secion_Yas_CF_1.wav', 'La seccion', 'group', '01'),
    new AudioElement('La seccion carlos', '/assets/audios/secion_carlos_C_1.wav', 'La seccion', 'Carlos', '01'),
    new AudioElement('La seccion carlos', '/assets/audios/secion_carlos_C_2.wav', 'La seccion', 'Carlos', '02'),
    new AudioElement('La seccion carlos', '/assets/audios/secion_carlos_F_1.wav', 'La seccion', 'Fer', '01'),
    new AudioElement('La seccion carlos', '/assets/audios/secion_carlos_J_1.wav', 'La seccion', 'Jordi', '01'),
    new AudioElement('La seccion Fernando', '/assets/audios/secion_fernando_F_1.wav', 'La seccion', 'Fer', '01'),
    new AudioElement('La seccion fresquer', '/assets/audios/secion_fresquer_C_1.wav', 'La seccion', 'Carlos', '01'),
    new AudioElement('La seccion fresquer', '/assets/audios/secion_fresquer_F_1.wav', 'La seccion', 'Fer', '01'),
    new AudioElement('La seccion fresquer', '/assets/audios/secion_fresquer_J_1.wav', 'La seccion', 'Jordi', '01'),
    new AudioElement('La seccion huevos colgando', '/assets/audios/secion_Yas_C_1.wav', 'La seccion', 'Carlos', '01'),
    new AudioElement('La seccion Yas', '/assets/audios/secion_Yas_C_2.wav', 'La seccion', 'Carlos', '02'),
    new AudioElement('La seccion Yas', '/assets/audios/secion_Yas_C_3.wav', 'La seccion', 'Carlos', '03'),
    new AudioElement('La seccion Yas', '/assets/audios/secion_Yas_F_1.wav', 'La seccion', 'Fer', '01'),
    new AudioElement('La seccion Yas', '/assets/audios/secion_Yas_J_1.wav', 'La seccion', 'Jordi', '01'),
    new AudioElement('Un sensuar', '/assets/audios/sensuar_C_1.wav', 'Un sensuar', 'Carlos', '01'),
    new AudioElement('Un sensuar', '/assets/audios/sensuar_C_2.wav', 'Un sensuar', 'Carlos', '02'),
    new AudioElement('Un sensuar', '/assets/audios/sensuar_F_1.wav', 'Un sensuar', 'Fer', '01'),
    new AudioElement('Un sensuar', '/assets/audios/sensuar_J_1.wav', 'Un sensuar', 'Jordi', '01'),
    new AudioElement('Un sensuar', '/assets/audios/sensuar_J_2.wav', 'Un sensuar', 'Jordi', '02'),
    new AudioElement('Series', '/assets/audios/series_C_1.wav', 'Series', 'Carlos', '02'),
    new AudioElement('Series', '/assets/audios/series_C_2.wav', 'Series', 'Carlos', '02'),
    new AudioElement('Series', '/assets/audios/series_CJ_1.wav', 'Series', 'group', '01'),
    new AudioElement('Series', '/assets/audios/series_F_1.wav', 'Series', 'Fer', '01'),
    new AudioElement('Series', '/assets/audios/series_J_1.wav', 'Series', 'Jordi', '01'),
    new AudioElement('Series', '/assets/audios/series_J_2.wav', 'Series', 'Jordi', '02'),
    new AudioElement('Test Drogas', '/assets/audios/test_drogas.wav', 'Test', 'group', '01'),
    new AudioElement('Test embarazo', '/assets/audios/test_embarazo.wav', 'Test', 'group', '01'),
    new AudioElement('El Test', '/assets/audios/test_F_1.wav', 'Test', 'group', '01'),
    new AudioElement('Movimiento Sexy', '/assets/audios/movimento_sexy.wav', 'shot', 'group', '01'),
    new AudioElement('Ya vas tarde', '/assets/audios/ya_tarde_caballero.wav', 'shot', 'group', '01'),
    new AudioElement('Ya Wey!', '/assets/audios/ya_wey.wav', 'shot', 'group', '01')
  ];

  constructor() {}

  getAudios() {
    return this.audios;
  }

  public categoriesRAW = [];
  public categories = [];
  public categoriesObj = [];

  public default = '-- Sección --';

  getCategories() {
    this.audios.forEach(item => {
      this.categoriesRAW.push(item.section);
    });

    this.categories = this.categoriesRAW.filter(function(item, index, inputArray) {
      return inputArray.indexOf(item) === index;
    });

    this.categoriesObj.push({ name: this.default });

    this.categories.forEach(item => {
      this.categoriesObj.push({ name: item });
    });
    return this.categoriesObj;
  }
}
