import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el:ElementRef) {}

  activeID : any

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
      setTimeout(() => {
        this.initializeIntersectionObserver()

      }, 100);
    }
  }


  initializeIntersectionObserver(){
    const trigger = document.getElementById('details-container')
    const about = document.getElementById('ABOUT')
    const experience = document.getElementById('EXPERIENCE')

    const options = {
      // root: trigger,
      rootMargin: "0px 0px -80% 0px",
      // scrollMargin: "0px",
      threshold: 0.01,
    };
    // options.root?.classList.add('background')
    console.log(options)
    
    const observer = new IntersectionObserver((enteries, observer)=>{
      enteries.forEach(entry=>{
        if(entry.isIntersecting){
          this.activeID = entry.target.id
         console.log(entry.target)

        }
      })
      // console.log(enteries, observer)
    }, options);
    // if(trigger){observer.observe(trigger)
    if(this.el) observer.observe(this.el.nativeElement)
    if(about) observer.observe(about)
    if(experience) observer.observe(experience)
  }

  scrolltosection(section: string){
    let element = document.getElementById(section)
    if(element != null && element){
    element.scrollIntoView({
      behavior: "smooth", 
      block: "start",
      inline: "nearest"
    })
  }
  
  }


}
