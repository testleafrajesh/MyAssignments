let str = "testleaf"
let rev = " "
let num=str.length


for (let i=num ; i>=0; i--)
{
    rev = rev + str.charAt(i)
    }
    console.log(rev);

// Palindrome
let numb = str.length - 1;

for (let i = num; i >= 0; i--) {
    rev = rev + str.charAt(i);
}

//console.log("Reversed string:", rev);

if (str === rev) {
    console.log("It is a Palindrome");
} else {
    console.log("It is NOT a Palindrome");
}
