export enum pokemonsTypeDefenition {
    normal = 'normal',
    fire = 'fire',
    fighting = 'fighting',
    water = 'water',
    flying = 'flying',
    grass = 'grass',
    poison = 'poison',
    electric = 'electric',
    ground = 'ground',
    psychic = 'psychic',
    rock = 'rock',
    ice = 'ice',
    bug = 'bug',
    dragon = 'dragon',
    ghost = 'ghost',
    dark = 'dark',
    steel = 'steel',
    fairy = 'fairy',
}

export type PokemonListResult = {
    name: string;
};

export type PokemonList = {
    results: PokemonListResult[];
    count: number;
};

type PokemonImages = {
    front_default: string;
    front_female: string;
};

type PokemonType = {
    url: string;
    name: pokemonsTypeDefenition;
};

type PokemonTypes = {
    slot: number;
    type: PokemonType;
};

type PokemonStat = {
    name: string;
};

type PokemonStatsType = {
    base_stat: number;
    stat: PokemonStat;
};

export type Pokemon = {
    id: number;
    name: string;
    sprites: PokemonImages;
    types: PokemonTypes[];
    stats: PokemonStatsType[];
    weight: number;
    height: number;
    base_experience: number;
};
