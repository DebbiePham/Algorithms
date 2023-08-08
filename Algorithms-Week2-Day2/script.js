var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// how do i get the name?
// console.log(monter.name)

//  how do i get the second type 
// console.log(monters.type[1])

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// for (var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id >99) {
//         console.log(pokemon[i].id, pokemon[i].name);
//     }
// }

// // console.log the pokémon objects whose id is evenly divisible by 3
// for (var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].id % 3 == 0) {
//         console.log(pokemon[i].id, pokemon[i].name);
//     }
// }

// // console.log the pokémon objects that have more than one type
// for (var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length > 1) {
//         console.log(pokemon[i].id, pokemon[i].name);
//     }
// }

// // console.log the names of the pokémon whose only type is "poison"
// for (var i=0; i<pokemon.length; i++) {
//     if(pokemon[])
// }
// console.log the first type of all the pokémon whose second type is "flying"
// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"


// for (var i=0; i<pokemon.length; i++) {
//     if (pokemon[i].id % 3 == 0) {
//         console.log(pokemon[i].id, pokemon[i].name);
//     }
// }

// for (var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length>1) {
//         console.log(pokemon[i]);
//     }
// }

// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types.length == 1 && pokemon[i].types == "poison") {
//         console.log(pokemon[i]);
//     }
// }

// console.log the first type of all the pokémon whose second type is "flying"
// for(var i=0; i<pokemon.length; i++) {
//     if(pokemon[i].types[1] == "flying") {
//         console.log(pokemon[i].types[0]);
//     }
// }

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"


for (var i=0; i<pokemon.length; i++) {
    if (pokemon[i].types.length == 1 && pokemon[i].types == "poison"){
        console.log(pokemon[i].name.split("").reverse().join(""));
    }
}

// Daniel Gray's way
for (var i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.length === 1 && pokemon[i].types[0] === "poison") {
        var revName = "";
        for (var j = pokemon[i].name.length - 1; j >= 0; j--) {
            revName += pokemon[i].name[j];
        }console.log(revName);
    }
}

// Bobby's way
for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].types == "poison" && pokemon[i].types.length == 1) {
        var temp = pokemon[i].name;
        var reversed = Array.from(temp).reverse().join("");
        console.log(reversed);
    }
}
