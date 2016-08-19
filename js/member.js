var member = function(){
	
	
	var request = new XMLHttpRequest();			
				request.open("GET", "./data/member", true);
				request.onreadystatechange = function (){
					if(request.readyState === 4)
					{
						if(request.status === 200 || request.status == 0)
						{
							var data = JSON.parse(request.responseText);
							var root = document.querySelector("#member section");
							//phd header
							var node = generateHead("Ph.D Students");
							root.appendChild(node);
							//phd list
							for(i=0;i<data.phd.length;i++){
								node = generateCard(data.phd[i]);
								root.appendChild(node);
							}
							//master header
							node = generateHead("Master Students");
							root.appendChild(node);
							//master list
							for(i=0;i<data.master.length;i++){
								node = generateCard(data.master[i]);
								root.appendChild(node);
							}
						}
					}
					
				}
	request.send();
	
	function generateHead(name){
		var head = '<h4 class="mdl-header mdl-color-text--grey-A900"></h4>';
		var head_class = 'mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-color--grey-300';
		var node = document.createElement("header");
		node.setAttribute("class",head_class);
		node.innerHTML=head;
		node.querySelector("h4").innerHTML=name;
		return node;
	};
	
	function generateCard(data){
		var card = '<div class="mdl-card member"><div class="mdl-card__picture" ><img class="mdl-card_img mdl-shadow--2dp " src=""></img></div><div class="mdl-card__title"></div><div class="mdl-card__actions "><li class="fb"></li><li class="linkedin"></li><li class="mail_address"></li></div></div>';
		var card_class = 'mdl-cell mdl-cell--2-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone mdl-color--grey-300 ';
		var fb = '<a href="" target="_blank"><img src="./img/icon/fb.png"><img></a>';
		var fb_black = '<img src="./img/icon/fb_black.png">';
		var linkedin = '<a href="" target="_blank"><img src="./img/icon/linkedin.png"><img></a>';
		var linkedin_black = '<img src="./img/icon/linkedin_black.png"><img></a>';
		var mail = '<a id="professor-mail" href=""></a>';
		
		var node = document.createElement("div");
		node.setAttribute("class",card_class);
		node.innerHTML=card;
		
		node.querySelector(".mdl-card__title").innerHTML=data.name;
		if(data.img!='none') node.querySelector(".mdl-card__picture img").src=data.img;
		else node.querySelector(".mdl-card__picture img").src="./img/pic/human.png";
		
		if(data.fb!='none'){
			node.querySelector(".fb").innerHTML=fb;
			node.querySelector(".fb a").href=data.fb;
		}
		else node.querySelector(".fb").innerHTML=fb_black;
		
		if(data.linkedin!='none'){
			node.querySelector(".linkedin").innerHTML=linkedin;
			node.querySelector(".linkedin a").href=data.linkedin;
		}
		else node.querySelector(".linkedin").innerHTML=linkedin_black;
		if(data.mail!='none'){
			node.querySelector(".mail_address").innerHTML=mail;
			node.querySelector(".mail_address a").href=data.mail;
		}
		else;
		return node;
	};
	
}