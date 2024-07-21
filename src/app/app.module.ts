import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TachesComponent } from './taches/taches.component';
import { AddtacheComponent } from './addtache/addtache.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TachesComponent, AddtacheComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
