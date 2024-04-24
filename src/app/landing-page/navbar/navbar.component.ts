import { Component, inject } from '@angular/core';
import { DialogComponent } from '../../main-content/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DialogComponent, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  translate = inject(TranslationService);

  openAnimationImages: string[] = [
    "./../../../assets/img/navbar/menuOpen/burger.png",
    "./../../../assets/img/navbar/menuOpen/transition1.png",
    "./../../../assets/img/navbar/menuOpen/transition2.png",
    "./../../../assets/img/navbar/menuOpen/transition3.png",
    "./../../../assets/img/navbar/menuOpen/x.png",
  ];

  closeAnimationImages: string[] = [
    "./../../../assets/img/navbar/menuClose/close1.png",
    "./../../../assets/img/navbar/menuClose/close2.png",
    "./../../../assets/img/navbar/menuClose/close3.png",
    "./../../../assets/img/navbar/menuOpen/burger.png",
  ];

  isMenuOpen: boolean = false;
  visitedFirst: boolean = false;
  currentIndex: number = 0;
  interval: any;
  
  // constructor() {}
  constructor(public dialog: MatDialog) {}
  
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '100%', // Dialog über die ganze Seite öffnen
  //     height: '100%'
  //   });
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '90%', // Passen Sie die Breite des Dialogs nach Bedarf an
      height: 'clac(100vh - 92px)',
      // position: { top: 'calc(100% - 300px - 500px)' }, // Positionierung des Dialogs
      data: { /* Hier können Sie Daten an den Dialog übergeben, wenn benötigt */ }
    });
  
    // Hören Sie auf das 'afterClosed' Ereignis des Dialogs, um Aktionen auszuführen, wenn der Dialog geschlossen wird
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onClick();
      // Fügen Sie hier Aktionen hinzu, die nach dem Schließen des Dialogs ausgeführt werden sollen
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.currentIndex = 0; // Zurücksetzen des Index für die Animation
    this.startAnimation();
  }

  startAnimation() {
    const animationImages = this.isMenuOpen ? this.openAnimationImages : this.closeAnimationImages;
    this.currentIndex = 0; // Starten Sie die Animation von Anfang an
    this.interval = setInterval(() => {
      this.showNextImage(animationImages);
    }, 250);
  }


  showNextImage(images: string[]) {
    if (this.currentIndex >= images.length - 1) {
      clearInterval(this.interval); // Animation stoppen, wenn alle Bilder durchlaufen wurden
    } else {
      this.currentIndex++;
    }
  }

  getImageSrc(): string {
    if (!this.isMenuOpen && !this.visitedFirst) {
      return this.openAnimationImages[0];
    } else {
    const animationImages = this.isMenuOpen ? this.openAnimationImages : this.closeAnimationImages;
    this.visitedFirst = true;
    return animationImages[this.currentIndex];
    }
  }
}
