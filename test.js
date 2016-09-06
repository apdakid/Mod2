var foo = {};
var bar = Object.create(foo);

foo.x = 9;

console.log(bar.x);