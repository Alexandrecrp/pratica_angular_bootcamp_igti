import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-fotos',
  templateUrl: './galeria-fotos.component.html',
  styleUrls: ['./galeria-fotos.component.css'],
})
export class GaleriaFotosComponent implements OnInit {
  imageArray: string[] = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg',
    'assets/img/4.jpg',
    'assets/img/5.jpg',
  ];
  index: number = 0;
  imageToShow: string = '';
  incrementa: number = 1;
  totalimagem: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.imageToShow = this.imageArray[0];
    this.totalimagem = this.getTotalImagem();
  }

  getTotalImagem() {
    return this.imageArray.length;
  }

  prev() {
    this.index--;
    this.imageToShow = this.imageArray[this.index];
    this.incrementa--;
  }

  next() {
    this.index++;
    this.imageToShow = this.imageArray[this.index];
    this.incrementa = this.index + 1;
  }

  first() {
    this.imageToShow = this.imageArray[0];
    this.incrementa = 1;
    this.index = 0;
  }

  last() {
    this.imageToShow = this.imageArray[this.imageArray.length - 1];
    this.incrementa = this.imageArray.length;
    this.index = this.imageArray.length - 1;
  }
}
