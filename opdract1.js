//pseudo-code

//1a:
//
//



const tvNames = inventory.map ((tv) => {
    return tv.type
})
console.log(tvNames)

//1b:
// 1. gebruik de filter-methods
// 2. Filter uitkomst

const tvSoldOut = inventory.filter((tvSoldOutActual) => {
    return tvSoldOutActual.originalStock === tvSoldOutActual.sold
})

console.log(tvSoldOut)

//1c:

// 1. gebruik de filter methode
// 2. Via options van het object options om bij ambilight te komen
// 3. Filter uitkomst

const tvAmbiLight =  inventory.filter((tvAmbi) => {
    return tvAmbi.options.ambiLight === true
})

console.log(tvAmbiLight)


//1d:
//
//

function tvSortLowHigh(array) {
     array.sort((a, b) => {
        return a.price - b.price;

    })
}
tvSortLowHigh(inventory)
console.log(inventory)
  
