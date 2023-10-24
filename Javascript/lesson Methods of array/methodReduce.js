let mr = [3,1,5];
function fre(r,v,i,arr) {
    console.log('result: '+r); 
    console.log('value: '+v);
    console.log('index: '+i);
    console.log(' --------------');
    return r + v;
}
//метод массива reduce() позволяет превратить массив в любое другое значение
// с помощью переданной функции-колбэка и начального значения. 
console.log (mr.reduce(fre,0)); 

function frm(r,v,i,arr) {
    return r*v;
}
console.log ( mr.reduce(frm,1) );

