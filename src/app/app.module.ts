import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SoundboardComponent } from './soundboard/soundboard.component';
import { SoundboardItemComponent } from './soundboard/soundboard-item/soundboard-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoundboardComponent,
    SoundboardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
