import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Document } from '../document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  //申請單在這裡
  documents:Document[];
  undergraduate_doc:Document[]=[];
  graduate_doc:Document[]=[];
  doctorial_doc:Document[]=[];
  scholarship_doc:Document[]=[];//獎學金申請單

  //考古題在這裡
  exams:Document[];
  undergraduate_exam:Document[]=[];
  graduate_exam:Document[]=[];
  doctorial_exam:Document[]=[];

  //修業規定加上相關規範都在這裡
  courses:Document[];
  undergraduate_course:Document[]=[];
  graduate_course:Document[]=[];
  grads_course:Document[]=[];
  doctorial_course:Document[]=[];
  scholarship_course:Document[]=[];//獎學金相關規範

  
  
  constructor(private apiService: ApiService) { }

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
      }else if (this.documents[i].type == 'scholarship') {
        this.scholarship_doc.push(this.documents[i]);
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
      }else if (this.courses[i].type == 'scholarship') {
        this.scholarship_course.push(this.courses[i]);
      }
    }}


  }