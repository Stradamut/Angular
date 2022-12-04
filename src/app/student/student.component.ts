import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() schoolnames:string='';
  
  @Output() student:EventEmitter<string> = new EventEmitter<string>();
  
  onClick(){
    this.student.emit("Sakemotokun");
  }

}
