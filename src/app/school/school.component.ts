import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent {
  schoolname:any[]=[{school:'Naranja Acaemy'}]
  studentname:string='';

  getName(studentName:string){
    this.studentname=studentName;
  }

}
