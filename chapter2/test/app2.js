var int1 = 4;
var int2 = -2;
var int3 = 6;
var int4 = -3;

alert('int1とint2の足し算の結果は' + (int1 + int2) + 'です');
alert('int2とint3の引き算の結果は' + (int2 - int3) + 'です');
alert('int3とint4の掛け算の結果は' + int3 * int4 + 'です');
alert('int4とint1の割り算の結果は' + int4 / int1 + 'です');

var max = 200;
var num = int1;
var count = 0;

while(num < max){
	num = num * 3;
	count = count + 1;
}

alert('int1に3をかけ続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

do{
	int1 + int2
}while(num < max){
	num = num + int3;
	count = count + 1;
}

alert('int1にint3を足し続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');
