import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-img-secondary-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-img-secondary-news.component.html',
  styleUrl: './full-img-secondary-news.component.css'
})
export class FullImgSecondaryNewsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) type!: string;

  @Input() class: string = '';
}
