import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  @Output() addCard = new EventEmitter<any>();

  data = {
    name: null,
    age: null,
    ageSpecifier: null,
    isStudent: null,
    school: null
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.addCard.emit({ ...this.data });
      this.resetForm();
    } else {
      alert('Please make sure all required fields are filled and the data is valid');
    }
  }

  resetForm() {
    this.data = {
      name: null,
      age: null,
      ageSpecifier: null,
      isStudent: null,
      school: null
    };
  }

  isFormValid(): boolean {
    return (
      this.data.name !== null &&
      this.data.age !== null && 
      this.data.age <= 125 &&
      this.data.isStudent !== null
    );
  }
}
