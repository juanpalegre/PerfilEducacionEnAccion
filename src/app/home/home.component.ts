import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Variable para rastrear el índice de la imagen actual en el carousel
  currentImageIndex = 0;

  // Array de rutas de imágenes para el carousel
  images = [
    '../../assets/images/IMG-20180808-WA0020.jpg',
    '../../assets/images/IMG_20231111_123913.jpg',
    '../../assets/images/IMG_20230701_091707.jpg'
    // Agrega más rutas de imágenes según sea necesario
  ];

  ngOnInit() {
    // Iniciar el intervalo para cambiar automáticamente la imagen cada 3 segundos (3000 milisegundos)
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  // Método para cambiar a la siguiente imagen en el carousel
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // Método para cambiar a la imagen anterior en el carousel
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
