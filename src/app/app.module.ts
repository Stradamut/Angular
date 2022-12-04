import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { SearchComponent } from './search/search.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    StudentComponent,
    SearchComponent,
    ShowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
