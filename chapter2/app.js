var hello = 'Hello World';
alert(hello);

var int1 = 1;
alert(int1);

alert('Hello' + 'World');

var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

var orange = 100;
var apple = 120;

if(oange < apple){
	alert('みかんの値段がリンゴより安い');
}
else if(orange == apple){
	alert('みかんとリンゴが同じ値段');
}
else{
	alert('みかんの値段がリンゴより高い');
}

var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2をかけ続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

