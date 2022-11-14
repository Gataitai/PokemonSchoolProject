
export const get = async ({resource, queryParam}) => {
    let url = 'http://localhost:3001/' + resource;
    if(queryParam){
        url+= "?" + queryParam;
    }
    const response = await fetch(url);
    const json = await response.json();
    return json[resource];
}

export const getById = async ({resource, id}) => {
    let url = 'http://localhost:3001/' + resource;
    if(id){
        url+= "/" + id;
    }
    const response = await fetch(url);
    const json = await response.json(); //resource url is altijd in het meervoud maar de resource zelf bij deze functie komt terug als object in enkelvoud
    return json[resource.substring(0, resource.length-1)];
}

export const post = async ({resource, object, token}) => {
    let url = 'http://localhost:3001/' + resource;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    }

    if(token){
        options.headers["Authorization"] = 'Bearer ' + token;
    }

    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            return data;
        })
        .catch((e) => {
            console.log(e);
            return {
                error: e.error
            };
        });
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