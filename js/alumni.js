var alumni = function(){
	var request = new XMLHttpRequest();			
				request.open("GET", "./data/alumni", true);
				request.onreadystatechange = function (){
					if(request.readyState === 4)
					{
						if(request.status === 200 || request.status == 0)
						{
							var data = JSON.parse(request.responseText);
							var root = document.querySelector("#alumni section .alumni");
							//header
							var node = generateHead();
							root.appendChild(node);
							//alumni list
							for(i=0;i<data.alumni.length;i++){
								node = generateCard(data.alumni[i]);
								root.appendChild(node);
							}
						}
					}
					
				}
	request.send();
	
	function generateHead(){
		var head = '<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone name"></div>\
					<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone degree"></div>\
					<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone year"></div>\
					<div class="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--3-col-phone thesis"></div>';
		var head_class = 'mdl-card__title header mdl-color-text--grey-800';
		var node = document.createElement("div");
		node.setAttribute("class",head_class);
		node.innerHTML=head;
		node.querySelector(".name").innerHTML="Name";
		node.querySelector(".degree").innerHTML="Degree";
		node.querySelector(".year").innerHTML="Year";
		node.querySelector(".thesis").innerHTML="Thesis";
		return node;
	};
	
	function generateCard(data){
		var card = '<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone name"></div>\
					<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone degree"></div>\
					<div class="mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-tablet mdl-cell--1-col-phone year"></div>\
					<div class="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-tablet mdl-cell--3-col-phone thesis"></div>';
		var card_class = 'mdl-card__title body mdl-color-text--grey-800';
		var node = document.createElement("div");
		node.setAttribute("class",card_class);
		node.innerHTML=card;
		node.querySelector(".name").innerHTML=data.name;
		node.querySelector(".degree").innerHTML=data.degree;
		node.querySelector(".year").innerHTML=data.year;
		node.querySelector(".thesis").innerHTML=data.thesis;
		return node;
	};
	
}