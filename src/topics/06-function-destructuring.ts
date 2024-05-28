interface Product{
    model: string;
    price: number;
}

const phone: Product={
    model: 'Xiaomi Redmi 12 pro',
    price: 250
}

const tablet: Product={
    model: 'iPad 15',
    price: 1000
}

const shoppingCart=[phone,tablet];
const tax:number= 0.15;

interface TaxCalculationOptions{
    products:Product[];
    tax:number;
    
}

function taxCalculation(options:TaxCalculationOptions):number[]{
let total=0;
    options.products.forEach(product =>{
        total += product.price;
    });
    return [total, total * options.tax]
};

const result = taxCalculation ({
    products: shoppingCart,
    tax,
    });

console.log('Total', result[0])
console.log('Total', result[1])
