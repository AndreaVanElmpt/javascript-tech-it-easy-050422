// Opdracht 4
//4a
//
//

function tvDetail (tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

console.log("4a", tvDetail(inventory[5]));

//4b
//
//

function tvPrice (price){
    return `€${price},-`
}

console.log("4b", tvPrice(inventory[5]));

//4c

function tvInch (arrayTv){

    for (let i = 0; i < arrayTv.length; i++){
        const inchCM = arrayTv[i] * 2.54.toFixed(0);
        arrayTv[i] = arrayTv[i] + ' inch (' + inchCM  + ' cm) ';

    }
   return arrayTv.join(' | ');
}

console.log('4c', tvInch(inventory[5].availableSizes));

//4d

  const tvNfo = document.getElementById('tvNfo');
  tvNfo.innerHTML = `
  <h3>${tvDetail(inventory[3])}</h3>
  <h3>${tvPrice(inventory[3].price)}</h3>
  <h3>${tvInch(inventory[3].availableSizes)}</h3>  `


// 4e

function gerarateTvList(tvArray){
      const infoTvBundles = document.getElementById('allTv');

      const tvModels = tvArray.map((tvObject) =>{
          return`
          <li>
          <h3>${tvDetail(tvObject)}</h3>
          <h3>${tvPrice(tvObject.price)}</h3>
          <h3>${tvInch(tvObject.availableSizes)}</h3>
          </li>
        `

      })
     infoTvBundles.innerHTML = `${tvModels}`;
}

gerarateTvList(inventory);

