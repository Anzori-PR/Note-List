import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TranslateServices } from 'src/app/service/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  default: string = 'en';
  currentUrl: string | null = null;
  destination!: string;

  constructor( public languageService: TranslateServices, private router: Router ) {}

  ngOnInit(): void {
    // get the current URL and respond to changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;

        if(this.currentUrl === '/my-notes') {
          this.destination = 'Note List';
        }else if(this.currentUrl === '/my-notes/add-note') {
          this.destination = 'Add Note';
        }else {
          this.destination = 'Edit Note'
        }
        
      }
    });
  }

  changeLanguage() {
    this.default = this.default === 'en' ? 'ge' : 'en';
    this.languageService.switchLanguage(this.default);
    this.languageService.toggleSwitch();
  }
}
