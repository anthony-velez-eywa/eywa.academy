import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headerpage',
  imports: [RouterLink],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.css'
})
export class HeaderpageComponent {
@Input() title: string = '';
@Input() subtitle : string = '';
}
