import { Component, input } from '@angular/core';
import { GeneroLiterario, Livro } from './livro-interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {

  livro = input.required<Livro>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito;
  }

}
