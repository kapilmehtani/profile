import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ResumeDetailsComponent } from '../resume-details/resume-details.component';

@Component({
  selector: 'app-profile-wrapper',
  standalone: true,
  imports: [HeaderComponent, ResumeDetailsComponent],
  templateUrl: './profile-wrapper.component.html',
  styleUrl: './profile-wrapper.component.scss'
})
export class ProfileWrapperComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  )
  {}

  glow : any


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initiatecursorGlow();
    }
  }
  ngOnInit(): void {
  }
  initiatecursorGlow()
  {
    
    document?.addEventListener('mousemove', (e) => {
      this.glow = document.querySelector('.cursor-glow');
      this.glow.style.left = e.clientX + 'px';
      this.glow.style.top = e.clientY + 'px';
    }); 
  }



}
