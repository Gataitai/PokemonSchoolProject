const url = 'http://localhost:3001/';
const pokemon = "pokemon";
const auction = "auction";
const auth = "auth";

const get = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.pokemons;
}

export const fetchPokemonsByTypes = async (types) => {
    let route = url + pokemon + "?types=" + types.join(",");
    return await get(route);
}

export const fetchPokemonsByName = async (name) => {
    let route = url + pokemon + "?name=" + name;
    return await get(route);
}

export const fetchPokemonsByPrice = async (price) => {
    let route = url + pokemon + "price=" + price;
    return await get(route);
}

export const fetchPokemons = async () => {
    let route = url + pokemon;
    return await get(route);
}