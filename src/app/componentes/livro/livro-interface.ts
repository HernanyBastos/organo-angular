export interface Livro {
    titulo: string,
    autoria: string,
    favorito: boolean,
    genero: GeneroLiterario
    capa: string
}

export interface GeneroLiterario {
    id: string,
    value: string,
    livro: [],
}
