//global
const tarot = require('./tarot.json')
const suit_dic = {'major':'ar','wands':'wa','cups':'cu','swords':'sw','coins':'pe'}
const rank_dic = {'page':'pa','knight':'kn','queen':'qu','king':'ki'}
const dual_dic = {0:['正位','light'],1:['逆位','shadow']}

function cardinfo(index){
	let chineseName = tarot['tarot'][index]['name2']
	let englishName = tarot['tarot'][index]['name']
	let dual = Math.round(Math.random())?0:1

	let flag = dual_dic[dual][0]
	let text = `${flag} ${chineseName}`
	let s = tarot['tarot'][index]['suit']
	let r = tarot['tarot'][index]['rank']
	let suit = suit_dic[s];
	let rank = typeof r == 'number'? r:rank_dic[r]
	//console.log(text) // 正位 女祭司 (The High Priestess)


	//console.log(rank);//該系列第幾張
	tarotName = `${suit}${rank}.jpg`
	//console.log(tarotName); //檔名

	mean = tarot['tarot'][index]['meanings'][dual_dic[dual][1]]
	randomChoice = Math.floor(Math.random()*mean.length)

	//console.log(mean[randomChoice]) // Mean
	return {
		reversed:dual,
		card:text,
		path:'./static/tarot/'+tarotName,
		mean:mean[randomChoice]
	}
}

exports.daily = function(){
	let index = Math.floor(Math.random()*78)
	return cardinfo(index);
}

function multi_random(number){
	let collect = [];
	function check_repeat(array,rd){
		for(let i=0;i<array.length;i++){
			if(array[i]==rd) return false;
		}
		return true;
	}
	while(number){
		let rd = Math.floor(Math.random()*78)
		//check
		if(check_repeat(collect,rd)){
			collect.push(rd);
			number--
		}
	}
	return collect;
}

exports.s_result = function(number){
	let spread = multi_random(number);
	let list = {};
	while(number--){
		let index = spread[number]
		list[number] = cardinfo(index)
//		console.log(cardinfo(index))
	}
	return list;
}