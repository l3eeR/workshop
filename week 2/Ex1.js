const my0bject = {a: 1, b: 2};
console.log(my0bject['a']);
console.log(my0bject['b']);
console.log(my0bject);

const my0bject2 = my0bject;
my0bject['a'] = 999;
console.log(my0bject['a'], my0bject2['b']);