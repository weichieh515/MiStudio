import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { DepartmentsComponent } from './departments/departments.component';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsListviewComponent } from './news-listview/news-listview.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DegreeRequirementsComponent } from './degree-requirements/degree-requirements.component';
import { DocumentComponent } from './document/document.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { OtherComponent } from './other/other.component';


const routes: Routes = [
  {
    path: 'index',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'news-list/:type',
    component: NewsListComponent
  },
  {
    path: 'news-listview',
    component: NewsListviewComponent
  },
  {
    path: 'recruitments',
    component: RecruitmentsComponent
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'introduction/:section',
    component: IntroductionComponent
  },
  {
    path: 'degree-requirements',
    component: DegreeRequirementsComponent
  },
  {
    path: 'document',
    component: DocumentComponent
  }, {
    path: 'news/:id',
    component: NewsContentComponent
  }, {
    path: 'other',
    component: OtherComponent
  }, {
    path: '**',
    redirectTo: '/'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
