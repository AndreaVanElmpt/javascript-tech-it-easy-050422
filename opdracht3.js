//opdracht 3

//3a

// const tvBrand = inventory.map((brands) => {
//     return brands.brand
//
// })
//
// const tvBrandAv = document.getElementById(`brandsAv`);
// tvBrandAv.innerHTML = tvBrand.join(`<li>`);

//3b


function listTvBrand (someArray){

    const tvBrand = someArray.map((brands) => {
        return brands.brand;

    })

    const tvBrandAv = document.getElementById(`brandsAv`);
    tvBrandAv.innerHTML = tvBrand.join(`<li>`);

}

listTvBrand(inventory)


