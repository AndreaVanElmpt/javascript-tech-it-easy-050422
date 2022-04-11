// Opdracht 2
// 2a

let tvSold = 0;

for (let i = 0; i <inventory.length; i++){
    tvSold += inventory[i].sold
}

console.log(tvSold);

//2b


const amountSold = document.getElementById(`totalAmount`);

console.log(amountSold);

amountSold.textContent = tvSold

//2c

let stock =0;

for (let i = 0; i <inventory.length; i++){
    stock += inventory[i].originalStock
}

console.log(stock)

//2d

const amountStock = document.getElementById(`totalStock`)

console.log(amountStock)

amountStock.textContent = stock

//2e

let stockLeft = 0;

for (let i = 0; i <inventory.length; i++){
   stockLeft += inventory[i].originalStock - inventory[i].sold
}

console.log(stockLeft)

const amountLeft = document.getElementById(`inventory`)

console.log(amountLeft)

amountLeft.textContent = stockLeft
