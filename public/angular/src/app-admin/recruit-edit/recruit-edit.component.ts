import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
//
import { environment } from '../../environments/environment';
//
import { AdminApiService } from '../admin-api.service';
//
import { RecruitContentComponent } from '../../app/recruit-content/recruit-content.component';
import { ApiService } from '../../app/api.service';
import { Recruit } from '../../app/recruit';
//

@Component({
  selector: 'app-recruit-edit',
  templateUrl: './recruit-edit.component.html',
  styleUrls: ['./recruit-edit.component.css']
})
export class RecruitEditComponent implements OnInit {

  editMode: boolean;
  id: any;
  type: string;
  recruit: Recruit;
  private sub: any;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private adminApiService: AdminApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.editMode = true;
        this.getRecruit(this.id);
      } else if (params['type']) {
        this.recruit = { type: params['type'], title: '', content: '' }
      } else {
        console.log('error');
      }
    });
  }

  getRecruit(id): void {
    this.apiService
      .getRecruit(id)
      .subscribe(data => {
        this.recruit = data;
      });
  }

  createRecruit(): void {
    this.adminApiService
      .createRecruit(this.recruit)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }else{
          alert('新增成功');
          this.router.navigate(['/recruitments']);
        }
      });
  }

  updateRecruit(): void {
    this.adminApiService
      .updateRecruit(this.id, this.recruit)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
        else {
          alert('編輯成功');
          this.router.navigate(['/recruitments']);
        }
      });
  }

  deleteRecruit(): void {
    this.adminApiService
      .deleteRecruit(this.id)
      .subscribe(data => {
        if (data.error_code != 0) {
          alert(data.error_code)
        }
        else {
          alert('刪除成功');
          this.router.navigate(['/recruitments']);
        }
      });
  }


}
