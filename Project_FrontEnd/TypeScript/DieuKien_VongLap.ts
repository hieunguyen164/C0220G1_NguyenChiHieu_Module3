/**
 * If/else
 */

let count = 50;
if (count > 0) {
    count--;
} else {
    count = 0;
}
console.log(count);

/**
 * loop
 */

console.log('for loop');
const keys = 'abcdef';
for(let i = 0; i<keys.length; i++){
    console.log(keys[i]);
}

console.log('while loop');
let i = 0;
while(i < keys.length){
    console.log(keys[i]);
    i++
}

console.log('do-while loop');
i = 0;
do{
    console.log(keys[i]);
    i++
}while (i < keys.length);

console.log('for-of loop');
for (const item of keys) {
    console.log(item);
}

console.log("for-in loop");
const user = {
    name: 'Bob',
    age: 55
};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
