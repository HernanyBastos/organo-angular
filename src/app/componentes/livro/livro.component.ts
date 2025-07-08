import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {

  livro = {
    titulo: "Harry Poter e a Pedra Filosofal",
    autoria: "J. K. Rowling",
    capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
  }

}
