import { Component } from '@angular/core';


//Componentes
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';
import { GeneroComponent } from './componentes/genero/genero.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    ListaLivrosComponent,
    GeneroComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'organo';
}
