import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  aba: string = 'home'
  roll: string  = 'image'
  images: string[] = [
    'assets/images/chegaDeDor.jpeg',
    'assets/images/alimentacao.jpeg',
    'assets/images/atividadeFisica.jpeg',
    'assets/images/valvulaEscape.jpeg',
    'assets/images/Sono.jpeg',
    'assets/images/oqVcAcha.jpeg',

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
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    },
  }

  ngOnInit() {
    for (let i = 0; i < this.images.length; i++) {
      let image = this.images[i];
    }
  }
}
