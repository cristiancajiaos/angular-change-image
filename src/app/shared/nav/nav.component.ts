import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  image = "assets/images/iconos/presentacion.png";

  constructor() {}

  functionChangeImage(image: any) {
    this.image = image.src;
    this.image =
      image.src === this.image
        ? (this.image = "assets/images/iconos/presentacion-activo.png")
        : this.image;
    console.log(this.image);
  }

  ngOnInit(): void {}
}
