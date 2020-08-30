let btnGen = document.getElementById('sendButton');
var data = new Array();
btnGen.addEventListener('click', () => {
    let info = faker.helpers.createCard();  
    let {name} = info;
	document.getElementById('fake__msg').innerHTML = name;
});

var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("send");


button.addEventListener("click", function(){
     //var newMessage = document.createElement("li");
     var newMessage = document.getElementById('priyal');
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});


var sender = document.getElementById("sender").innerHTML= ` <div class="row no-gutters">
			<div class="col-md-3 offset-md-9">
			  <div class="chat-bubble chat-bubble--right" id="priyal">
				ok bye
				</div>
			</div>
		  </div>`;


var reciever = document.getElementById("reciever").innerHTML= ` <div class="row no-gutters">
			<div class="col-md-3">
			  <div class="chat-bubble chat-bubble--left">
				Yea you should
			  </div>
			</div>
          </div>`;



button.addEventListener("click",function(){

	var newMessage = document.getElementById("priyal");
	newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";
});




function add_element(){

	let info = faker.helpers.createCard();  
    let {name} = info;
    document.getElementById('fakemsg').innerHTML = name;

data.push(document.getElementById('textbox').value);
document.getElementById('textbox').value=''; 
disp(); 
}


function disp(){
var str='';
for (i=0;i<data.length;i++) 
{ 
str +=data[i] + "<br >";
} 

document.getElementById('disp').innerHTML=str;

document.getElementById("temp").innerHTML= `<div class="row no-gutters">
			<div class="col-md-3">
			  <div class="chat-bubble chat-bubble--left id="res">
				Yea you should 
			  </div>
			</div>
		  </div>`;
		  document.getElementById('res').innerHTML=str;  	  
}

document.getElementById('fakemsg').innerHTML = 'hello'

let info = faker.helpers.createCard();  
    let {name} = info;
    document.getElementById('fakemsg').innerHTML = name;
