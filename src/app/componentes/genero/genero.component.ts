import { Component } from '@angular/core';
import { LivroComponent } from "../livro/livro.component";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero',
  imports: [LivroComponent],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.scss'
})
export class GeneroComponent {

  livro = livros[0];
}
