var batAction;
var number1 = new Array();
var number2 = new Array();
var numbers = new Array();
var stringAction='';
var result=0;
var i=0;
var z=0;
var numberX;


function C1(){
var elem = document.getElementById('C1');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C2(){
var elem = document.getElementById('C2');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C3(){
var elem = document.getElementById('C3');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C4(){
var elem = document.getElementById('C4');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C5(){
var elem = document.getElementById('C5');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C6(){
var elem = document.getElementById('C6');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C7(){
var elem = document.getElementById('C7');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C8(){
var elem = document.getElementById('C8');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C9(){
var elem = document.getElementById('C9');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}
function C0(){
var elem = document.getElementById('C0');
numbers[i] = elem.value;
stringAction = stringAction + numbers[i];
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}

function Cdivision(){
numberX='';
for (var Num =0; Num<i; Num++) {
numberX=numberX+numbers[Num];
number1[z]=parseFloat(numberX);
}
z++;
i=0;
batAction = Cdivision;
stringAction = stringAction + '/';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;	
}
function Cmultiply(){
numberX='';
for (var Num =0; Num<i; Num++) {
numberX=numberX+numbers[Num];
number1[z]=parseFloat(numberX);
}
z++;
i=0;
batAction = Cmultiply;
stringAction = stringAction + '*';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;	
}
function Cminus(){
numberX='';
for (var Num =0; Num<i; Num++) {
numberX=numberX+numbers[Num];
number1[z]=parseFloat(numberX);
}
z++;
i=0;
batAction = Cminus;	
stringAction = stringAction + '-';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
}
function Cplus(){
numberX='';
for (var Num =0; Num<i; Num++) {
numberX=numberX+numbers[Num];
number1[z]=parseFloat(numberX);
}
z++;
i=0;
batAction = Cplus;
stringAction = stringAction + '+';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;	
}

function point(){
numbers[i] = '.';
stringAction = stringAction + '.';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
i++;
}

function reset(){
i=0;
z=0;
stringAction = '';
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML ='0';
}

function Cequally(){
numberX='';
for (var Num =0; Num<i; Num++) {
	numberX=numberX+numbers[Num];
	number1[z]=parseFloat(numberX);
}
if (batAction == Cdivision) {
		result = number1[0] / number1[1];
}
if (batAction == Cmultiply) {
	result = number1[0] * number1[1];
}
if (batAction == Cminus) {
	result = number1[0] - number1[1];
}
if (batAction == Cplus) {
	result = number1[0] + number1[1];
}
stringAction = stringAction +'='+result;
var Cresalt = document.getElementById('Cresalt');
Cresalt.innerHTML = stringAction;
}




