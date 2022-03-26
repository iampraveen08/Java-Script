// Declarinjg a class

class Product {
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil = new Product('Pencil', 20, 2, 'P10');

const Product1 = class {
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getdiscountvalue(){
        return this.discount
    }
    set setDiscountValue(value){
        return this.discount = value;
    }
    discountValue(){
        return this.discount*this.price/100
    }
};

let chair = new Product1('Chair', 499, 15, 'C10')