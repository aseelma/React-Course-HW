//task 4:
interface Product {
    name: string;
    price: number;
}

function calculateTheTotal(products: Product[]) 
{
    let total = 0; 
    for (const product of products) {
        total += product.price; 
    }
    return total; 
}

// Example usage
const products: Product[] = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
];

const totalPrice = calculateTheTotal(products);
console.log(`Total Price: $${totalPrice}`);

/***********************************************************************/
//task 5 :

function validEmailOrNot(email: string)
{
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //username@domain.com
    return validEmail.test(email);
}

const testEmails = [
    "Aseel@example.com",
    "Aseel@gmail",
];

testEmails.forEach((email) => {
    console.log(`${email}: ${validEmailOrNot(email)}`); 
});
