import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  images: { path: string, caption: string }[] = [
    { path: "./../../../assets/img/skills/Angular.png", caption: "Angular" },
    { path: "./../../../assets/img/skills/Typescript.png", caption: "Typescript" },
    { path: "./../../../assets/img/skills/JavScript.png", caption: "JavScript" },
    { path: "./../../../assets/img/skills/html.png", caption: "HTML" },
    { path: "./../../../assets/img/skills/css.png", caption: "CSS" },
    { path: "./../../../assets/img/skills/Firebase.png", caption: "Firebase" },
    { path: "./../../../assets/img/skills/Git.png", caption: "Git" },
    { path: "./../../../assets/img/skills/Scrum.png", caption: "Scrum" },
    { path: "./../../../assets/img/skills/restApi.png", caption: "Rest-Api" },
    { path: "./../../../assets/img/skills/materialDesign.png", caption: "Material Design" },
    // Fügen Sie die restlichen Bildpfade und Unterschriften hinzu
  ];


}
