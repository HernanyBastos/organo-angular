import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro-interface';
import { livros } from '../../mock-livros';

//Componentes
import { GeneroComponent } from "../genero/genero.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.scss'
})
export class ListaLivrosComponent implements OnInit {

  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }

      this.livrosPorGenero.get(generoId)?.push(livro);
    })

    this.generos = [
      {
        id: "fantasia",
        value: "Fantasia",
        livro: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: "distopia",
        value: "Distopia",
        livro: this.livrosPorGenero.get("distopia") ?? []
      },
      {
        id: "classico",
        value: "Clássico",
        livro: this.livrosPorGenero.get("classico") ?? []
      },
      {
        id: "suspense",
        value: "Suspense",
        livro: this.livrosPorGenero.get("suspense") ?? []
      },
      {
        id: "infantil",
        value: "Infantil",
        livro: this.livrosPorGenero.get("infantil") ?? []
      },
      {
        id: "terror",
        value: "Terror",
        livro: this.livrosPorGenero.get("terror") ?? []
      },
      {
        id: "ficcao",
        value: "Ficção",
        livro: this.livrosPorGenero.get("ficcao") ?? []
      },
      {
        id: "romance",
        value: "Romance",
        livro: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: "drama",
        value: "Drama",
        livro: this.livrosPorGenero.get("drama") ?? []
      },
      {
        id: "dark",
        value: "Dark",
        livro: this.livrosPorGenero.get("dark") ?? []
      },
      {
        id: "filosofico",
        value: "Filosófico",
        livro: this.livrosPorGenero.get("filosofico") ?? []
      },
      {
        id: "poesia",
        value: "Poesia",
        livro: this.livrosPorGenero.get("poesia") ?? []
      },
      {
        id: "realismo",
        value: "Realismo Mágico",
        livro: this.livrosPorGenero.get("realismo") ?? []
      },
      {
        id: "contemporaneo",
        value: "Contemporâneo",
        livro: this.livrosPorGenero.get("contemporaneo") ?? []
      },
      {
        id: "infantojuvenil",
        value: "Infantojuvenil",
        livro: this.livrosPorGenero.get("infantojuvenil") ?? []
      },
      {
        id: "biografia",
        value: "Biografia",
        livro: this.livrosPorGenero.get("biografia") ?? []
      }
    ];

    console.log(this.livrosPorGenero);

  }
}
