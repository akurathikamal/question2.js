const number =[1,2,3,4,5];
const doubled =number.map(number=>number*2);
console.log(doubled);
let map=new Map();
map.set('name','angel');
map.set('age',30);
map.set('true','Boolean key');
map.delete('age');
console.log(map.has('age'));

