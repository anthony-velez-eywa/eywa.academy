import { Component, OnInit } from '@angular/core';
import { HeaderpageComponent } from '../../shared/components/headerpage/headerpage.component';

// Usa el objeto global jQuery
declare const $: any;

@Component({
  selector: 'app-about',
  imports: [HeaderpageComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    console.log($.fn.owlCarousel);  // Verifica si la función existe

    $(document).ready(() => {  // Usa la sintaxis moderna para $(document).ready()
      $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: true
      });
    });
  }
}
