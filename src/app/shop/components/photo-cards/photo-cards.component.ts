import { Component, Input, OnInit } from '@angular/core';
import { Images } from '../../interfaces/images.interface';

@Component({
  selector: 'app-photo-cards',
  templateUrl: './photo-cards.component.html',
  styleUrls: ['./photo-cards.component.css'],
})
export class PhotoCardsComponent implements OnInit {
  @Input() imagesCloth: Images[] = [];

  constructor() {}

  ngOnInit(): void {}
}
