this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Mere pyari Dido ,aapko viki bhai ki taraf se janam din ki truck bhar bhak badhai ho,mana hum thode nadan hai kabhi  galti se dil dukha diya hoga tho maaf kr dena bhai,aap se bas itni hi shikayt hai ki bassss apni baate nai ho pati pehle jaise,\nBaki aap issi tarh phulo phalo ,,,khao piyooo!!!!!! Aur masti karte raho\n Ab bolta rahuga tho page khatam ho jaiyga...\nAApko apka janm din mubarak manuuu,\n Love you bhai\nAnd wish you very happppppyyyyy B_I_R_T_H__D_A_Y , vaise ye project pr apan 1 sal se kaam karela tha, kabhi miloge tho dekhlena code ";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 1
	},0.15);
}
