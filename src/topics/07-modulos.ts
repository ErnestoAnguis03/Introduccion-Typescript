const shoppingCart:Product[]=[
    {model:'galaxy1 7' ,price:200},
    {model:'applewatch', price:500},
    {model:'xiaomi 15', price: 300}
]



const [total, taxResult] = taxCalculation ({
    products: shoppingCart,
    tax,
    });
    
console.log('Total', total)
console.log('Total', taxResult)

import { Product,taxCalculation,tax } from "./06-exercise-destructuring"