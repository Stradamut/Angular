import { getLocaleDateFormat, getLocaleTimeFormat, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getTestBed } from '@angular/core/testing';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  Movieid: string = '';

  // ส่งค่า id ออก
  @Output() MoId: EventEmitter<string> = new EventEmitter<string>();


  @Input() results: any; // สร้างตัวแปลสำหรับรับ data ที่มาจาก home
  @Input() shows: boolean = false; // สร้างตัวแปลสำหรับค่า show ที่มาจาก home เพื่อนำมาเช็คข้อมูลว่ามีหรือไม่

  confirm() {
    this.MoId.emit(this.Movieid)//ใส่ค่า id ไปใน MoId
    console.log("test")
    // gliLLL(){
    // }
  }

}


// function gliLLL() {
//   throw new Error('Function not implemented.');
// }

