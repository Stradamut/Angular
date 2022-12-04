import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'',redirectTo: 'school',pathMatch:'full'},
  //                         {path:'school',component:SchoolComponent},
  //                         {path:'student',component:StudentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'show', component: ShowComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
