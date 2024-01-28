import { Component, OnInit } from '@angular/core';
import { TranslateServices } from 'src/app/service/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  default: string = 'en';


  constructor(public languageService: TranslateServices) {}

  ngOnInit(): void {
    
  }
  
  
  changeLanguage() {
    this.default = this.default === 'en' ? 'ge' : 'en';
    
    this.languageService.switchLanguage(this.default);
    
    this.languageService.toggleSwitch();
  }
  

}
