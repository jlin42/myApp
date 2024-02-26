import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() data: any;
}
