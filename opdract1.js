//pseudo-code

//1a:
//
//



const tvNames = inventory.map ((tv) => {
    return tv.type
})
console.log(tvNames)

//1b:
// 1. gebruik de filter-methoths
// 2. Filter uitkomst

const tvSold = inventory.filter((tvSoldOut) => {
    return tvSoldOut.originalStock === tvSoldOut.sold
})

console.log(tvSold)

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

inventory.sort((a, b) => {
 return a.price - b.price;

})

console.log(inventory)
  
