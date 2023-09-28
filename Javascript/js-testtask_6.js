function myFirstFunction (n) {
    var f = 1;
    for (var i = 2; i <= n; i++) 
    {
        f = f * i;
    }    
        return f; 

}
console.log ( myFirstFunction(5) );