
import { AppComponent } from '../app';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberEditComponent } from './member-edit/member-edit.component';
import { MembersComponent } from './members/members.component';
import { RecruitEditComponent } from './recruit-edit/recruit-edit.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { AuthGuard } from './auth-guard.service';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {
    path: 'member-add/:type',
    component: MemberEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'member-edit/:id',
    component: MemberEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'members',
    component: MembersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recruitments',
    component: RecruitmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recruit-add/:type',
    component: RecruitEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recruit-edit/:id',
    component: RecruitEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news-add/:type',
    component: NewsEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'news-list/:type',
    component: NewsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documents',
    component: DocumentsComponent,
    canActivate: [AuthGuard]
  }, 
  {
    path: 'document-add/:doctype/:type',
    component: DocumentEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'document-edit/:doctype/:id',
    component: DocumentEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
