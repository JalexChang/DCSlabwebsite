var research = function(){
	var request = new XMLHttpRequest();			
				request.open("GET", "./data/research", true);
				request.onreadystatechange = function (){
					if(request.readyState === 4)
					{
						if(request.status === 200 || request.status == 0)
						{
							var data = JSON.parse(request.responseText);
							var root = document.querySelector("#research section");
							//header
							var node = generateHead("On-going Projects");
							root.appendChild(node);
							//project list
							for(i=0;i<data.project.length;i++){
								node = generateCard(data.project[i]);
								root.appendChild(node);
							}
							node = generateHead("Past Projects");
							root.appendChild(node);
						}
					}
					
				}
	request.send();
	
	function generateHead(name){
		var head = '<h4 class="mdl-header "></h4>';
		var head_class = 'mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--grey-300';
		var node = document.createElement("header");
		node.setAttribute("class",head_class);
		node.innerHTML=head;
		node.querySelector("h4").innerHTML=name;
		return node;
	};
	
	function generateCard(data){
		var card = '<div class="mdl-card project">\
					<div class="mdl-card__title"><h4 class="mdl-card__title-text name"></h4></div>\
					<div class="mdl-card__supporting-text description"></div>\
					<div class="mdl-card__actions"><li class="time"></li><li class="keywords"></li></div>\
					</div>';
		var card_class = 'mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--grey-300';
		var node = document.createElement("div");
		node.setAttribute("class",card_class);
		node.innerHTML=card;
		node.querySelector(".name").innerHTML=data.name;
		node.querySelector(".description").innerHTML=data.description;
		node.querySelector(".time").innerHTML="Execution Time: "+data.start_time+" - "+data.end_time;
		node.querySelector(".keywords").innerHTML=data.keywords;
		return node;
	};
	
}