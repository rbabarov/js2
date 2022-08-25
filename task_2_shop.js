


let catalog = []
let num_goods = {}

let basket = []
let num_basket = {}

function addGoods(name, description, sizes, price, available) {
    let index = catalog.length
    let item = {
        "id": index,
        "name": name,
        "description": description,
        "sizes": sizes,
        "price": price,
        "available": available
    }
    catalog.push(item);
    num_goods[index] = catalog[index];
}

function addInBasket(num_id, amount) {
    let index = basket.length;
    if (num_basket[num_id]) {
        basket[num_basket[num_id]].amount = basket[num_basket[num_id]].amount + amount
    } else {
        let item = {
            "selected_id": num_id,
            "amount": amount
        }
        basket.push(item);
        num_basket[num_id] = index
    }
}

function dellInBasket(num_id) {
    delete basket[num_basket[num_id]];
    delete num_basket[num_id];
}

function fullDelBasket() {
    basket.length = 0;
    num_basket = {};
}

function fullSums() {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let item of basket) {
        if (item) {
            totalAmount += 1;
            totalSumm = totalSumm + (item.amount * num_goods[item.selected_id].price)
        }
    }
    return {"totalAmount": totalAmount, "totalSumm": totalSumm}
}



addGoods("футболка", "короткий рукав", [46, 48, 50, 52, 54, 56], 1100, true)
addGoods("толстовка", "с принтом", [46, 48, 50, 52, 54, 56], 2500, true)
addGoods("рубашка", "синяя", [46, 48, 50, 52, 54, 56], 3000, true)
addGoods("брюки", "черные", [46, 48, 50, 52, 54, 56], 5000, true)
addGoods("куртка", "с капюшоном", [52, 54, 56], 8000, true)
addInBasket(1, 5)
addInBasket(3, 8)
addInBasket(3, 1)
addInBasket(4, 2)

dellInBasket(4)

console.log(fullSums())
