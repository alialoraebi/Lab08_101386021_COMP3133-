import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  title = "My List of Students"

  getTitle(){
    return this.title;
  }

  getCurrentDate(){
    return new Date();
  }

}
