import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../main-content/dialog/dialog.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule, DialogComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit  {
  images: string[] = [
    "./../../../assets/img/landingpage/scroll/Property1.png",
    "./../../../assets/img/landingpage/scroll/Property2.png",
    "./../../../assets/img/landingpage/scroll/Property3.png",
    "./../../../assets/img/landingpage/scroll/Property4.png",
    "./../../../assets/img/landingpage/scroll/Property5.png",
    "./../../../assets/img/landingpage/scroll/Property6.png"
  ];
  currentIndex: number = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 300);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  showNextImage() {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }

}
