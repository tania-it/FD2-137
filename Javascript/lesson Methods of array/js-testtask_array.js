function countDuplicates(string) {
//    const a1 = string.split(''); 
//    const a2 = [... string];  // строку перегнали в массив одним циклом
//    const stat = {};

 return [... string].reduce((stat, symbol) => {

    stat[symbol] = (stat[symbol] ?? 0) + 1;
    return stat;
 }, {} );
}
  
   