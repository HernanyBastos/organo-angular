import { Component } from '@angular/core';
import { Livro } from '../livro-interface';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {

  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito;
  }

  livro: Livro = {
    titulo: "Harry Poter e a Pedra Filosofal",
    autoria: "J. K. Rowling",
    favorito: false,
    genero: "Ficção",
    capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
  }
}
