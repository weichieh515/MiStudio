import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth.module';

//other Library
import { CKEditorModule } from 'ng2-ckeditor';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { DndModule } from 'ng2-dnd';





//Service
import { AdminApiService } from './admin-api.service';
import { Data } from './data';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

//Component
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MembersComponent } from './members/members.component';
import { RecruitEditComponent } from './recruit-edit/recruit-edit.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DocumentsComponent } from './documents/documents.component';
import { CallbackComponent } from './callback/callback.component';


//client
import { CardComponent } from '../app/card/card.component';
import { DocumentListComponent } from '../app/document-list/document-list.component';
import { RecruitContentComponent } from '../app/recruit-content/recruit-content.component';
import { NewsContentComponent } from '../app/news-content/news-content.component';

//Pipe
import { SafePipe } from '../app/safe.pipe';
import { NewsTypePipe } from '../app/news-type.pipe';
import { ExamTypePipe } from '../app/exam-type.pipe';

//service
import { ApiService } from '../app/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SafePipe,
    RecruitmentsComponent,
    MemberEditComponent,
    MembersComponent,
    RecruitEditComponent,
    FileSelectDirective,
    RecruitmentsComponent,
    ButtonAddComponent,
    ButtonEditComponent,
    DocumentEditComponent,
    NewsEditComponent,
    NewsListComponent,
    NewsTypePipe,
    ExamTypePipe,
    AdminMenuComponent,
    DocumentsComponent,
    CallbackComponent,
    CardComponent,
    DocumentListComponent,
    RecruitContentComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    AppRoutingModule,
    AuthModule,
    DndModule.forRoot()
  ],
  exports:[ ],
  providers: [ApiService, AdminApiService, Data, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
