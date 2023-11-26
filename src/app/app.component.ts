import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  handleInputValue(value: string): void {
    console.log('Valeur du champ de saisie :', value);
  }
}
