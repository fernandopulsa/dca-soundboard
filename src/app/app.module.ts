import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SoundboardComponent } from './soundboard/soundboard.component';
import { SoundboardItemComponent } from './soundboard/soundboard-item/soundboard-item.component';
import { FooterComponent } from './footer/footer.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoundboardComponent,
    SoundboardItemComponent,
    FooterComponent,
    FilterByNamePipe,
    FilterByCategoryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
