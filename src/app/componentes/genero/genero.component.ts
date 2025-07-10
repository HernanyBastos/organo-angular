import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { GeneroLiterario } from '../livro/livro-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero',
  imports: [
    CommonModule,
    LivroComponent
  ],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.scss'
})
export class GeneroComponent {

  genero = input.required<GeneroLiterario>();
}
