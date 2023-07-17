import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  currentVariant = 0
  variants = [
    'fa-solid fa-user fa-5x',
    'fa-regular fa-user fa-5x',
    'fa-solid fa-poo fa-5x',
    'fa-sharp fa-solid fa-house fa-5x',
    'fa-solid fa-cloud fa-5x',
    'fa-solid fa-hippo fa-5x',
    'fa-solid fa-circle-info fa-5x',
    'fa-solid fa-circle-user fa-5x',
    'fa-brands fa-github-square fa-5x',
  ];
  getRandomIcon(): void{
    // setTimeout(() => {
    //   this.currentVariant = Math.round(Math.random() * this.variants.length)
    // }, 3000)
    this.currentVariant = Math.round(Math.random() * this.variants.length - 1)
    console.log(this.currentVariant)
  }
}
