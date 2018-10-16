function C1(){
document.getElementById('resalt').value +=1;
}
function C2(){
document.getElementById('resalt').value +=2;
}
function C3(){
document.getElementById('resalt').value +=3;
}
function C4(){
document.getElementById('resalt').value +=4;
}
function C5(){
document.getElementById('resalt').value +=5;
}
function C6(){
document.getElementById('resalt').value +=6;
}
function C7(){
document.getElementById('resalt').value +=7;
}
function C8(){
document.getElementById('resalt').value +=8;
}
function C9(){
document.getElementById('resalt').value +=9;
}
function C0(){
document.getElementById('resalt').value +=0;
}
function bracket1(){
document.getElementById('resalt').value +='(';
}
function bracket2(){
document.getElementById('resalt').value +=')';
}

function point(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='.') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
document.getElementById('resalt').value += '.';
}

function Cminus(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='-' || xr=='+' || xr=='*' || xr=='/') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
document.getElementById('resalt').value +='-';
}

function Cplus(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='-' || xr=='+' || xr=='*' || xr=='/') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
document.getElementById('resalt').value +='+';
}

function Cdivision(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='-' || xr=='+' || xr=='*' || xr=='/') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
document.getElementById('resalt').value +='/';
}

function Cmultiply(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='-' || xr=='+' || xr=='*' || xr=='/') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
document.getElementById('resalt').value +='*';
}

function Csqrt(){
var Cresalt = document.getElementById('resalt');
var cqrt = Cresalt.value;
document.getElementById('resalt').value = 'Math.sqrt('+ cqrt+')';

var elem = document.getElementById('resalt');
var stringAction = document.getElementById('Cresalt');
stringAction.innerHTML = 'sqrt('+cqrt+')=';
var rez = eval(elem.value);
document.getElementById('resalt').value = rez;
}

function Cpow(){
var Cresalt = document.getElementById('resalt');
var pow = Cresalt.value;
document.getElementById('resalt').value = 'Math.pow('+ pow+', 2)';

var elem = document.getElementById('resalt');
var stringAction = document.getElementById('Cresalt');
stringAction.innerHTML = pow + '*' + pow + '=';                                                                        
var rez = eval(elem.value);
document.getElementById('resalt').value = rez;
}

function Cequally(){
var Cresalt = document.getElementById('resalt');
var xr = Cresalt.value.slice(-1);
if (xr=='-' || xr=='+' || xr=='*' || xr=='/') {
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}

var elem = document.getElementById('resalt');
var stringAction = document.getElementById('Cresalt');
stringAction.innerHTML = elem.value + '=';
var rez = eval(elem.value);
document.getElementById('resalt').value = rez;
}

function Bspace(){
var Cresalt = document.getElementById('resalt');
document.getElementById('resalt').value = Cresalt.value.slice(0, -1);
}
function reset(){
document.getElementById('resalt').value = '';
var stringAction = document.getElementById('Cresalt');
stringAction.innerHTML = 'Anc=0';
}
