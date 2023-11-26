import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{
  @Input() label: string = 'Label';
  @Input() isMandatory: boolean = true;
  @Input() placeholder: string = 'Placeholder';
  @Input() hintText: string = 'This is a hint text to help user';

  @Output() inputValueChanged = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const value = (event.target as HTMLTextAreaElement).value;
    const result = `calix-${value}`;

    this.inputValueChanged.emit(result);
  }

  ngOnInit(): void {

  }


}
