import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../app/api.service';
import { Document } from '../../app/document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents:Document[];
  undergraduate_doc:Document[]=[];
  graduate_doc:Document[]=[];
  doctorial_doc:Document[]=[];
  type_document:String="document";

  exams:Document[];
  undergraduate_exam:Document[]=[];
  graduate_exam:Document[]=[];
  doctorial_exam:Document[]=[];
  type_exam:String="exam";

  courses:Document[];
  undergraduate_course:Document[]=[];
  graduate_course:Document[]=[];
  grads_course:Document[]=[];
  doctorial_course:Document[]=[];
  type_course:String="course";

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getDocuments();
    this.getExams();
    this.getCourses();
  }
  getDocuments(): void {
    this.apiService
      .getDocuments()
      .subscribe(data => {
        this.documents = data;
        this.sortDocuments();
      });
  }
  sortDocuments(): void {
    for (var i = 0; i < this.documents.length; i++) {
      if (this.documents[i].type == 'undergraduate') {
        this.undergraduate_doc.push(this.documents[i]);
      } else if (this.documents[i].type == 'graduate') {
        this.graduate_doc.push(this.documents[i]);
      }else if (this.documents[i].type == 'doctorial') {
        this.doctorial_doc.push(this.documents[i]);
      }
    }}


  getExams(): void {
    this.apiService
      .getExams()
      .subscribe(data => {
        this.exams = data;
        this.sortExams();
      });
  }
  sortExams(): void {
    for (var i = 0; i < this.exams.length; i++) {
      if (this.exams[i].type == 'undergraduate') {
        this.undergraduate_exam.push(this.exams[i]);
      } else if (this.exams[i].type == 'graduate') {
        this.graduate_exam.push(this.exams[i]);
      }else if (this.exams[i].type == 'doctorial') {
        this.doctorial_exam.push(this.exams[i]);
      }
    }}

  
getCourses(): void {
    this.apiService
      .getCourses()
      .subscribe(data => {
        this.courses = data;
        this.sortCourses();
      });
  }
  sortCourses(): void {
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i].type == 'undergraduate') {
        this.undergraduate_course.push(this.courses[i]);
      } else if (this.courses[i].type == 'graduate') {
        this.graduate_course.push(this.courses[i]);
      }else if (this.courses[i].type == 'grads') {
        this.grads_course.push(this.courses[i]);
      }else if (this.courses[i].type == 'doctorial') {
        this.doctorial_course.push(this.courses[i]);
      }
    }}
    
  goAddPage(doc_type,type){
      this.router.navigate(['/document-add',doc_type,type]);
      console.log(doc_type);
  }
  

}
