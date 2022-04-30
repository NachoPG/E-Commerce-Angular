import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../../interfaces/images.interface';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  @Input() imagesCloth: Images[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.imagesCloth);
  }
}
