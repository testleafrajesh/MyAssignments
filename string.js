function lengthOfLastWord(str) {
    // Remove extra spaces
    str = str.trim();
    // Split string into words
    let words = str.split(" ");
    // Get last word
    let lastWord = words[words.length - 1];
    // Return length
    return lastWord.length;
}
console.log(lengthOfLastWord("Hello World"));   
console.log(lengthOfLastWord("fly me to the moon")); 

function isAnagram(str1, str2) {
    // Convert to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // Sort characters
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    // Compare
    return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false