import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent {
  @Input() showFixedButton = true;

  toggleFixedButton() {
    this.showFixedButton = !this.showFixedButton;
  }
}
