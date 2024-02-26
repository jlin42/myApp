import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputFormComponent, InfoCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputApp';

  cards: any[] = [];

  onAddCard(data: any) {
    this.cards.push(data);
  }
}
