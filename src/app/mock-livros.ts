import { Livro } from "./componentes/livro/livro-interface";
import { GeneroLiterario } from "./componentes/livro/livro-interface";

export const livros: Livro[] = [
    {
        titulo: "Harry Potter e a Pedra Filosofal",
        autoria: "J. K. Rowling",
        genero: { id: "fantasia", value: "Fantasia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
    },
    {
        titulo: "1984",
        autoria: "George Orwell",
        genero: { id: "distopia", value: "Distopia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
        titulo: "Dom Casmurro",
        autoria: "Machado de Assis",
        genero: { id: "classico", value: "Clássico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81oS5vPfWxL.jpg"
    },
    {
        titulo: "O Código Da Vinci",
        autoria: "Dan Brown",
        genero: { id: "suspense", value: "Suspense", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81IJ2DkQEkL.jpg"
    },
    {
        titulo: "O Pequeno Príncipe",
        autoria: "Antoine de Saint-Exupéry",
        genero: { id: "infantil", value: "Infantil", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg"
    },
    {
        titulo: "It: A Coisa",
        autoria: "Stephen King",
        genero: { id: "terror", value: "Terror", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg"
    },
    {
        titulo: "A Metamorfose",
        autoria: "Franz Kafka",
        genero: { id: "ficcao", value: "Ficção", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71INN3wT7FL.jpg"
    },
    {
        titulo: "O Morro dos Ventos Uivantes",
        autoria: "Emily Brontë",
        genero: { id: "romance", value: "Romance", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81ClDrlV69L.jpg"
    },
    {
        titulo: "Os Miseráveis",
        autoria: "Victor Hugo",
        genero: { id: "drama", value: "Drama", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81LZXNLZTxL.jpg"
    },
    {
        titulo: "A Revolução dos Bichos",
        autoria: "George Orwell",
        genero: { id: "distopia", value: "Distopia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81Ws0+Z4ZLL.jpg"
    },
    {
        titulo: "Drácula",
        autoria: "Bram Stoker",
        genero: { id: "dark", value: "Dark", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71WxwHHRjlL.jpg"
    },
    {
        titulo: "O Lobo da Estepe",
        autoria: "Hermann Hesse",
        genero: { id: "filosofico", value: "Filosófico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/91EeF7a9NoL.jpg"
    },
    {
        titulo: "Capitães da Areia",
        autoria: "Jorge Amado",
        genero: { id: "classico", value: "Clássico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71oeD98+FZL.jpg"
    },
    {
        titulo: "A Hora da Estrela",
        autoria: "Clarice Lispector",
        genero: { id: "poesia", value: "Poesia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81zU4WGBS4L.jpg"
    },
    {
        titulo: "O Silmarillion",
        autoria: "J. R. R. Tolkien",
        genero: { id: "fantasia", value: "Fantasia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81GBnC33GqL.jpg"
    },
    {
        titulo: "Cem Anos de Solidão",
        autoria: "Gabriel García Márquez",
        genero: { id: "realismo", value: "Realismo Mágico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/91hJ+0kqUfL.jpg"
    },
    {
        titulo: "Coraline",
        autoria: "Neil Gaiman",
        genero: { id: "dark", value: "Dark", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71YV36mSO7L.jpg"
    },
    {
        titulo: "Torto Arado",
        autoria: "Itamar Vieira Junior",
        genero: { id: "contemporaneo", value: "Contemporâneo", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/91Dffw3N1IL.jpg"
    },
    {
        titulo: "A Menina que Roubava Livros",
        autoria: "Markus Zusak",
        genero: { id: "ficcao", value: "Ficção", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71c05lTE03L.jpg"
    },
    {
        titulo: "O Nome do Vento",
        autoria: "Patrick Rothfuss",
        genero: { id: "fantasia", value: "Fantasia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg"
    },
    {
        titulo: "Veronika Decide Morrer",
        autoria: "Paulo Coelho",
        genero: { id: "drama", value: "Drama", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71N7oTWmMML.jpg"
    },
    {
        titulo: "O Alquimista",
        autoria: "Paulo Coelho",
        genero: { id: "filosofico", value: "Filosófico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg"
    },
    {
        titulo: "Extraordinário",
        autoria: "R. J. Palacio",
        genero: { id: "infantojuvenil", value: "Infantojuvenil", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/71yS1qRrsuL.jpg"
    },
    {
        titulo: "O Colecionador",
        autoria: "John Fowles",
        genero: { id: "suspense", value: "Suspense", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/91Y0R4tw4DL.jpg"
    },
    {
        titulo: "O Iluminado",
        autoria: "Stephen King",
        genero: { id: "terror", value: "Terror", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81Afzr1znLL.jpg"
    },
    {
        titulo: "Memórias Póstumas de Brás Cubas",
        autoria: "Machado de Assis",
        genero: { id: "classico", value: "Clássico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81UQ6k4wkoL.jpg"
    },
    {
        titulo: "O Diário de Anne Frank",
        autoria: "Anne Frank",
        genero: { id: "biografia", value: "Biografia", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81bEZUecC3L.jpg"
    },
    {
        titulo: "Orgulho e Preconceito",
        autoria: "Jane Austen",
        genero: { id: "romance", value: "Romance", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        titulo: "Vidas Secas",
        autoria: "Graciliano Ramos",
        genero: { id: "drama", value: "Drama", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/91dVfLxY2WL.jpg"
    },
    {
        titulo: "Ensaio sobre a Cegueira",
        autoria: "José Saramago",
        genero: { id: "filosofico", value: "Filosófico", livro: [] },
        favorito: false,
        capa: "https://m.media-amazon.com/images/I/81w0W5Crn1L.jpg"
    }
];
