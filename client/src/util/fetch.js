export async function fetchPokemons(types, price) {
    let url = 'http://localhost:3001/pokemons';
    if(types){
        url = url + "?types=" + types.join(",");
    }
    if(price){
        url = url + "?price=" + price;
    }
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    return json.pokemons;
}