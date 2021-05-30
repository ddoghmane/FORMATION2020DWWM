const table = ['a','b'];
table.push('c');
console.log(table);
Object.freeze(table);
table.push('d');