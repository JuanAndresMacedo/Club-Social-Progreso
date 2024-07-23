import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-news.component.html',
  styleUrl: './secondary-news.component.css'
})
export class SecondaryNewsComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) type!: string;

  @Input() class: string = '';
}
