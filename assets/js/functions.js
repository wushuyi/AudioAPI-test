var s = soundsList = [
	'none',
	'do',
	're',
	'mi',
	'fa',
	'so',
	'la',
	'si',
	'da'
];

var playList = [
	1,1,5,5,6,6,5,4,4,3,3,2,2,1,
	5,5,4,4,3,3,2,5,5,4,4,3,3,2,
	1,1,5,5,6,6,5,4,4,3,3,2,2,1
];

var musicPlay = function(id){
	var audio = soundsList[playList[0]];
	playList.shift();
	sound.play(audio);
};
var sound = new Howl({
	urls: ['./assets/audio/test.mp3'],
	sprite: {
		none: [0,0],
		do: [2500, 600],
		re: [3120, 600],
		mi: [3720, 500],
		fa: [4220, 600],
		so: [4820, 500],
		la: [5320, 600],
		si: [5920, 500],
		da: [6420, 500]
	},
	onload: function(){
		sound.on('end', musicPlay);
		sound.play('none');
	}
});