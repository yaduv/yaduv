var smallNav=document.getElementsByClassName('small-nav')[0];
var bigNav=document.getElementsByClassName('big-nav')[0];

console.log(bigNav.style.width);

if(bigNav.style.width<900){
    bigNav.style.display='none';
    smallNav.style.display='block';
}
else{
    bigNav.style.display='block';
    smallNav.style.display='none';
}