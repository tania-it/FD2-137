function countDuplicates(string) {
    const stat = {}
//    let string = {};
  
    for ( const char  of string) {
       const currentCounter = stat[char] ?? 0;
       stat[char] = currentCounter + 1;
    }

    return stat;
}