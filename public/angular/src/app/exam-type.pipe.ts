import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examType'
})
export class ExamTypePipe implements PipeTransform {

  transform(value: string): any {
    switch (value) {
      case 'GENERAL':
        return '資訊管理碩士班';
      case 'HEALTH_CARE':
        return '醫療資訊管理碩士班';
      case 'embaexam':
        return '碩專班';
      case 'phdexam':
        return '博士班';
    }
  }
}
