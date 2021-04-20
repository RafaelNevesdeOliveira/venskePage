import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, PagesComponent],
  imports: [
    CommonModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
