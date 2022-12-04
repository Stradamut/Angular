import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

  constructor(private service: MovieService) { }

  public result: any;
  show = false;


  @Input() MoIds: string = '';  // สร้างตัวแปลสำหรับรับค่า id 

  //ส่งค่า shows
  @Output() shows: EventEmitter<boolean> = new EventEmitter<boolean>();

  //ส่งค่า results
  @Output() results: EventEmitter<any> = new EventEmitter<any>();


  // ngOnChanges ถ้ามีการเปลี่ยนแปลงจะทำงาน

  ngOnChanges() {
    // console.log(`ngOnChanges - counter is ${this.MoIds}`);
    // console.log(this.show)


    //เช็ค id
    if (this.MoIds != "") {
      // call services

      this.service.getMovieData(this.MoIds).subscribe(res => {
        // console.log(res.status);
        if (res.status == 200) {
          this.result = res.body;
          this.show = true;
          this.shows.emit(this.show)
          this.results.emit(this.result)

        }
        // console.log(this.result);

      }, (err) => {
        console.log(err.status)
        this.show = false
        console.log(this.show)
        this.shows.emit(this.show)
      }
      )


    }


  }
}






