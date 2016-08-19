var recruiting = function(){
	var request = new XMLHttpRequest();			
				request.open("GET", "./data/question", true);
				request.onreadystatechange = function (){
					if(request.readyState === 4)
					{
						if(request.status === 200 || request.status == 0)
						{
							var data = JSON.parse(request.responseText);
							var root = document.querySelector("#recruiting section .question ul");
							//alumni list
							for(i=0;i<data.no.length;i++){
								node = generateCard(data.no[i]);
								root.appendChild(node);
							}
						}
					}
					
				}
	request.send();

	function generateCard(data){
		var node = document.createElement("li");
		node.innerHTML="Q: "+data.question+"<br>"+"A: "+data.answer;
		return node;
	};
	
}