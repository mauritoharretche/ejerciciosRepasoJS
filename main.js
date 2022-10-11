/* console.log(beers) */

// 2) Generar una funcion que reciba como parametro el array de cervezas y 
// un valor de alcohol (numero). La funcion debe devolver un nuevo array con
// las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
// debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
// para las 12:15 tiramos ruleta a ver hasta donde llegaron

function beersAlcohol(array, valor) {
    let newBeers = []
    for (let beer of array){
        if (beer.abv <= valor){
            newBeers.push({name: `${beer.name}`, abv: `${beer.abv}`, ibu: `${beer.ibu}`})
        }
    }
    console.log(newBeers)
}

beersAlcohol(beers,4.5)

