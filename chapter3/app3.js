var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

alert('あなたの選んだ手は' + user_hand + 'です。');

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );

	if(js_hand_num == 0){
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if(js_hand_num == 2){
		js_hand = "パー";
	}

	return js_hand;
}