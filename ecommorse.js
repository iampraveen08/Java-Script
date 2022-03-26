// Excersise using objects
// itemName
// price
// discount
// itemCode

const product = {
    itemName: "Flower",
    price: 50,
    discount: 20,
    itemCode: 'F40'
}

function creatProduct(name, price, discount, itemCode) {
    return {
        itemCode: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

const football = creatProduct('football', 400, 10, 'F30');

// Constraction Function
function Product(name, price, discount, itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountvalue = function(){
        return price = discount/100;
    }
}

const mobile = new Product('Oneplus Nord', 30000, 5, 'OP20')