/* console.log(beers) */

// 2) Generar una funcion que reciba como parametro el array de cervezas y 
// un valor de alcohol (numero). La funcion debe devolver un nuevo array con
// las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
// debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
// para las 12:15 tiramos ruleta a ver hasta donde llegaron

/* function beersAlcohol(array, valor) {
    let newBeers = []
    for (let beer of array){
        if (beer.abv <= valor){
            newBeers.push({name: `${beer.name}`, abv: `${beer.abv}`, ibu: `${beer.ibu}`})
        }
    }
}

beersAlcohol(beers,4.5) */

/* 3) Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */

/* function top10(array) {
    let top10Beers = []
    for ( let beer of array){
        array.sort(())
        }
    }
 */

/* function top10(array) {
    let top10Beers = []
    array.sort(function (a, b) {
        if (b.abv > a.abv) {
          return 1;
        }
        if (b.abv < a.abv) {
          return -1;
        }
        return 0;
      });

    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name: `${beer.name}` , abv: `${beer.abv}`, ibu: `${beer.ibu}`})
        }
    }
    console.log(top10Beers)
}

top10(beers) */

/* function top10(array) {
    let top10Beers = []
    array.sort(function(a, b) {return b.abv - a.abv})

    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name:`${beer.name}`, abv: `${beer.abv}`, ibu: `${beer.ibu}`})
        }
    }
    console.log(top10Beers)
}

top10(beers) */


/* 4) Generar una función que reciba como parámetro un array
de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas */

function top10(array) {
    let top10Beers = []
    array.sort(function(a, b) {return a.ibu - b.ibu})

    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name:`${beer.name}`, abv: `${beer.abv}`, ibu: `${beer.ibu}`})
        }
    }
    console.log(top10Beers)
}

top10(beers)