import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
