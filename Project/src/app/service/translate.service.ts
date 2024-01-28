import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateServices {

  switch: boolean = false;


  constructor( private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  toggleSwitch() {
    this.switch = !this.switch;
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }


}
