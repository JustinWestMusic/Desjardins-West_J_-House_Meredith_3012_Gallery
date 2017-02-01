$(document).foundation();

(function()
{
	//"use strict";

	var profilePic1 = document.querySelector("#profilePic1");
	var navLink = document.querySelectorAll(".navLink");
	var secTitle = document.querySelector(".sectionSwap h2");
	var paraText = document.querySelector(".sectionSwap p");
	var name1 = document.querySelector("#name1");
	var role1 = document.querySelector("#role1");
	
	var profilePic2 = document.querySelector("#profilePic2");
	var name2 = document.querySelector("#name2");
	var role2 = document.querySelector("#role2");
	var paragraph2 = document.querySelector("#paragraph2");

	var appliedClass;

	function swapElements()
	{
		secTitle.classList.remove(appliedClass);

		appliedClass = this.id;


		secTitle.classList.add(this.id);
		
		secTitle.innerHTML = contentSwapper[this.id].title;
		paraText.innerHTML = contentSwapper[this.id].paragraph;
		name1.innerHTML = contentSwapper[this.id].name1;
		role1.innerHTML = contentSwapper[this.id].role1;
		profilePic1.innerHTML = contentSwapper[this.id].profilePic1;

		name2.innerHTML = contentSwapper[this.id].name2;
		role2.innerHTML = contentSwapper[this.id].role2;
		profilePic2.innerHTML = contentSwapper[this.id].profilePic2;
		paragraph2.innerHTML = contentSwapper[this.id].paragraph2;
	}

	[].forEach.call(navLink, function(a)
	{
		a.addEventListener('click', swapElements, true);
	});

	
	
	
})();