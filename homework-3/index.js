
const columns = ['name', 'count', 'price'];
const data = [
{
    name: 'Хлеб',
    count:  12,
    price: 14.99
},
{    
    name: 'Молоко',
    count: 3,
    price: 3.2
},
{
    name: 'Сыр',
    count: 1,
    price: 10
},
{
    name: 'Вода',
    count: 2, 
    price: 5.5
}
];

data.forEach(function(item, index) { // ... делать что-то с item
//    console.log(item);
console.log (item.name + ' ' + item.count + '   ' + item.price + '   ' )
  });

let maxColumnName = 0, maxColumnCount = 0, maxColumnPrice = 0;
// находим максимальную ширину каждого столбца для дополнения менее длинного текста пробелами
data.forEach(function(item, index) { 
    if (item.name.length > maxColumnName) {
        maxColumnName = item.name.length;
    }
    if (item.count.toString().length > maxColumnCount){
        maxColumnCount = item.count.toString().length;
    }
    if (item.price.toString().length > maxColumnPrice){
        maxColumnPrice = item.price.toString().length;
    }
});
console.log(maxColumnName, '  ', maxColumnCount, '  ', maxColumnPrice); 
let maxObj ={
    name: maxColumnName,
    count: maxColumnCount,
    price: maxColumnPrice
};

function createTextTable(columns, data) {
    return
}
const textTable = createTextTable(columns, data);





//console.log ("name " + data.name + " count " +  data.count +  " price " + data.price );
/*console.log (data[0]);
console.log (data[1]);
console.log (data[3]); */


/*
const columns = ['name', 'count', 'price'];
const data = [
    {name: 'Хлеб', count: 12, price: 14.99},
    {name: 'Молоко', count: 3, price: 3.2},
    {name: 'Сыр', count: 1, price: 10},
    {name: 'Вода', count: 2, price: 5.5},
];
*/