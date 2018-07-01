import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../document';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() documents:Document[];
  @Input() exams:Document[];
  @Input() courses:Document[];
  @Input() edit;
  @Input() doctype;//判斷是申請單(document)還是考古題(exam)還是修業規定(course)
  @Input() edit_doc;
  @Input() edit_exam;
  @Input() edit_course;
  constructor(private router: Router) {}

  ngOnInit() {
    this.edit_doc=(this.edit&&this.doctype=="document");
    this.edit_exam=(this.edit&&this.doctype=="exam");
    this.edit_course=(this.edit&&this.doctype=="course");
  }
  goEditPage(doctype:String,id) {
    this.router.navigate(['/document-edit',doctype,id]);
    // console.log(this.documents);
    // console.log(this.edit);
    // console.log(this.doctype);
    
  }
}