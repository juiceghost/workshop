/*
Factorial, in mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1.
*/


function factorial(a) {
    let i = a;
    let product = 1;

    while (i > 0) {
        // i = 7
        // 7 * 6 = product
        // i = 6
        // product * 5 -> product
        //product *= (product - 1);
        product *= i;
        console.log(product)
        i--;
    }
    return product;
}

// factorial(7) -> 5040

// factorial(10) -> 3628800
