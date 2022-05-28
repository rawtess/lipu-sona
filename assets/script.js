function changeText(id, text) {
	var display = document.getElementById(id);
	display.innerHTML = "";
	display.innerHTML = text;
}

function toggleText(id) {
	var display = document.getElementById(id);
	if (display.classList.contains('hide')) {
		display.classList.remove('hide');
	} else {
		display.classList.add('hide');
	}
}

function toggleTextClass(cla) {
	var display = document.getElementsByClassName(cla);

	for(var i = (display.length - 1); i >= 0; i--)
	{
		if (display[i].classList.contains('hide')) {
			display[i].classList.remove('hide');
		} else {
			display[i].classList.add('hide');
		}
	}
}


function randomizeTextOne(id, id2) {
	var array = ["<a href='made'>pali e ijo</a>", "<a href='good/shinx'>poka e soweli tan musi Pokenon</a>", "<a href='good/blorbos'>toki mute lon jan ni: ona li wawa tawa lawa mi</a>", "<a href='good'>pana e ijo pona</a>", "<a href='good/music'>kute e kalama musi nanpa wan</a>", "<a href='good/tokipona'>toki e ijo pona pi toki pona</a>", "<a href='good/videos'>pali e ni: sina o lukin e sitelen tawa pona ni</a>", "<a href='made/art'>pali e sitelen</a>", "<a href='made/games'>pana e musi</a>", "<a href='made/music'>pana e kalama musi ike</a>", '<a href="tess/gay"; id=gush onmouseover="changeText(&#39;gush&#39;,&#39;olin mi li ale tawa mi a,, ona li sewi li suwi li a!! mi olin e ona&#39;)"; onmouseout="changeText(&#39;gush&#39;,&#39;toki e pona pi olin mi&#39;)">toki e pona pi olin mi</a>'];
	var randInt = getRandomInt(0, array.length);
	var randInt2 = randInt;
	while (randInt2 === randInt) {
		randInt2 = getRandomInt(0, array.length);
	}
	var item = array[randInt];
	var item2 = array[randInt2];
	var display = document.getElementById(id);
	var display2 = document.getElementById(id2);
	display.innerHTML = item;
	display2.innerHTML = item2;
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min
}

function headerLink() {
	var id = "";
	var url = window.location.href.toString();
	if (url.includes("#")) {
		id = url.slice(url.lastIndexOf("#")+1);
	} else { return }
	toggleText(id + "t");
}

