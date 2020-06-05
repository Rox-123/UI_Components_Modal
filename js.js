var modal = document.getElementById("modal");

	var openBtn = document.getElementById("open-button");

	var closeBtn = document.getElementById("close-button");

	openBtn.onclick = function() {
	  modal.style.display = "block";
	}

	closeBtn.onclick = function() {
		modal.style.display = "none";
	}


	window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = "none";
		} 
	}
