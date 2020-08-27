import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am app componetn from component.ts';
  clickHandler(){
    alert('I am clicked');
  }
}
