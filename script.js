/* 

STEP ONE - SIMPLIFYING EXPRESSIONS
simplify the following big O expressions as much as possible:

1. O(n + 10)                                - o(n)      
2. O(100 * n)                               - o(n)
3. O(25)                                    - o(1)
4. O(n^2 + n^3)                             - o(n^3)
5. O(n + n + n + n)                         - o(n)
6. O(1000 * log(n) + n)                     - o(n)
7. O(1000 * n * log(n) + n)                 - o(n log n)
8. O(2^n + n^2)                             - o(2^n)
9. O(5 + 3 + 1)                             - o(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10)    - o(n^2)

*/

// STEP TWO - CALCULATING TIME COMPLEXITY

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
// o(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
// o(n)

function logAtMost10(n) {
    for (let i =1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
// o(1)

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
        newArray.push(array[i]);
        }
    }
    return newArray;
}
// o(n)

function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
        let subtotal = 0;
        for (let j = 0; j <= i; j++) {
        subtotal += array[j];
    }
        subtotalArray.push(subtotal);
    }
    return subtotalArray;
}
// o(n^2)

function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if(vowels.includes(char)) {
            if(char in vowelCount) {
            vowelCount[char] += 1;
        } 
        else {
            vowelCount[char] = 1;
            }
        }
    }

    return vowelCount;
}
// o(n)

/*

PART THREE - SHORT ANSWER
Answer the following questions

1. True or false: n^2 + n is O(n^2).                            - True
2. True or false: n^2 * n is O(n^3).                            - True
3. True or false: n^2 + n is O(n).                              - False
4. What’s the time complexity of the .indexOf array method?     - o(n)
5. What’s the time complexity of the .includes array method?    - o(n)
6. What’s the time complexity of the .forEach array method?     - o(n) 
7. What’s the time complexity of the .sort array method?        - o(n log n)
8. What’s the time complexity of the .unshift array method?     - o(n)
9. What’s the time complexity of the .push array method?        - o(1)
10. What’s the time complexity of the .splice array method?     - o(n) 
11. What’s the time complexity of the .pop array method?        - o(1)
12. What’s the time complexity of the Object.keys() function?   - o(n)
13. What’s the space complexity of the Object.keys() function?  - o(n)

*/