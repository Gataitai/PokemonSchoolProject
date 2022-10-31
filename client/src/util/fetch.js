
export const get = async (resource, queryParam) => {
    let url = 'http://localhost:3001/' + resource;
    if(queryParam){
        url+= "?" + queryParam;
    }
    const response = await fetch(url);
    const json = await response.json();
    return json[resource];
}

// const get = async (url) => {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
// }
//
// export const fetchPokemonsByTypes = async (types) => {
//     let route = url + pokemon + "?types=" + types.join(",");
//     return await get(route).pokemons;
// }
//
// export const fetchPokemonsByName = async (name) => {
//     let route = url + pokemon + "?name=" + name;
//     return await get(route).pokemons;
// }
//
// export const fetchPokemonsByPrice = async (price) => {
//     let route = url + pokemon + "price=" + price;
//     return await get(route).pokemons;
// }
//
// export const fetchPokemons = async () => {
//     let route = url + pokemon;
//     return await get(route).pokemons;
// }

// export const fetchAuctions = async () => {
//     let route = url + auction;
//     const json = get(route);
//     return
//     return await get(route).auctions;
// }