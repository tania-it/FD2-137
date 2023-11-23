function blueP( ) {
    var pars=document.getElementsByTagName('P');
    for ( var i=0; i<pars.length; i++ )
        pars[i].style.color='blue';
}

function redB( ) {
    var divBlock2=document.getElementById('Block2');
    var bolds=divBlock2.getElementsByTagName('B');
    for ( var i=0; i<bolds.length; i++ )
        bolds[i].style.color='red';
}
