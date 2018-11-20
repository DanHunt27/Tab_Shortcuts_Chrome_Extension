var defaultVal = 1;

window.onload = function () {
	chrome.storage.sync.get(['value'], function(result) {
		var num = result.value;
		
		if (num == undefined || (num != 1 && num != 2)) {
			num = defaultVal;
		}

		var select = document.getElementsByName('opt');
		for (var i = 0; i < select.length; i++) {
			if (select[i].value == num) {
				select[i].checked = "true";
				break;
			}
		}
		console.log(select);
		
		document.getElementById('saveButton').onclick = function() {saveOptions()}
	});
}

function saveOptions() {
	var select = document.getElementsByName('opt');
	for (var i = 0; i < select.length; i++) {
		if (select[i].checked) {
			chrome.storage.sync.set({'value': select[i].value});
		}
	}
}