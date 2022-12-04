import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  results: any;
  shows: boolean = false;
  MoId: string = '';

  getshow(newShow: boolean) {
    this.shows = newShow
    console.log("hone" + newShow)
  }

  getresult(newResult: any) {
    this.results = newResult
  }

  getMoId(newId: string) {
    this.MoId = newId
    console.log("hello")
    console.log(newId)
  }
}
