document.addEventListener('DOMContentLoaded',function(){

	var main = document.getElementById('main');

	main.addEventListener('mousemove',function(e){


		main.innerHTML = 'screen:' + e.screenX + '/' + e.screenY + '<br />'
		+ 'page:' + e.pageX + '/' + e.pageY + '<br />'
		+ 'client:' + e.clientX + '/' + e.clientY + '<br />'
		+ 'offset:' + e.offsetX + '/' + e.offsetY + '<br />'

	},false);

	document.getElementById('key').addEventListener('keydown',function(e){

		document.getElementById('out').textContent = e.keyCode;
		

	},false);



},false);

/*
document.addEventListener('DOMContentLoaded',function(){

	var list = document.getElementById('list');
	var pic = document.getElementById('pic');
	var del = document.getElementById('del');

	list.addEventListener('mouseover',function(e){

		var isbn = e.target.getAttribute('data-isbn');

		if(isbn){

			var img = document.createElement('img');
			img.src = "http://www.wings.msn.to/books/" + isbn + "/" + isbn + ".jpg";
			img.alt = e.innerHTML;
			img.height = 300;
			img.width = 216;

			if(pic.getElementsByTagName('img').length > 0){

				pic.replaceChild(img,pic.lastChild);

			}else{

				del.disabled = false;
				pic.appendChild(img);
			}

		}
	},false);

	del.addEventListener('mouseover',function(){


		pic.removeChild(pic.lastChild);
		del.disabled = true;

	},false);


},false);
*/
