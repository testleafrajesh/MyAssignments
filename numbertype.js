// Function to determine number type
function checkNumberType(num) {
    let type;
    // Using switch with true condition
    switch (true) {
        case (num > 0):
            type = "Positive number";
            break;

        case (num < 0):
            type = "Negative number";
            break;

        default:
            type = "Zero";
    }
    return type;
}
// Declare and initialize variable
let num = 5;
// Call the function and print result
console.log(checkNumberType(num));