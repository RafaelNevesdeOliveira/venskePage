import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images: string[] = [
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/chegaDeDor.webp',
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/alimentacao.webp',
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/atividadeFisica.webp',
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/valvulaEscape.webp',
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/Sono.webp',
    'https://raw.githubusercontent.com/RafaelNevesdeOliveira/venskePage/testCarousel/src/assets/images/oqVcAcha.webp',
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    nav: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    },
  }

  ngOnInit() {
    for (let i = 0; i < this.images.length; i++) {
      let image = this.images[i];
    }
  }
}
