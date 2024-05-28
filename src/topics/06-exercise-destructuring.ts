export interface Product{
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
export const tax:number= 0.15;

interface TaxCalculationOptions{
    products:Product[];
    tax:number;
    
}

export function taxCalculation(options:TaxCalculationOptions):[number,number]{
let total=0;
const{products, tax}=options
   products.forEach(product =>{
        const {price}=product;
        total += price;
    });
    return [total, total * tax]
};

const [total, taxResult] = taxCalculation ({
    products: shoppingCart,
    tax,
    });


console.log('Total', total)
console.log('Total', taxResult)