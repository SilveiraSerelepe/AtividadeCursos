import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ListaDeCursosComponent } from './listaDeCursos/listaDeCursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ListaDeCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
