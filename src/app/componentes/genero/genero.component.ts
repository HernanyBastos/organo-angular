import { Component, input } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/livro-interface';

@Component({
  selector: 'app-genero',
  imports: [LivroComponent],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.scss'
})
export class GeneroComponent {

  genero = input.required<GeneroLiterario>();
}
