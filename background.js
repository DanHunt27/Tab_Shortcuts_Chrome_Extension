chrome.storage.sync.get(['value'], function(result) {
	if (result.value == 1) {
		chrome.browserAction.onClicked.addListener(buttonClicked1);
	} else if (result.value == 2) {
		chrome.browserAction.onClicked.addListener(buttonClicked2);
	}
});

function buttonClicked1 (tab) {
	chrome.tabs.query({currentWindow: true, active: false}, function (array) {
		var tab_ids = new Array(array.length);
		for (var i = 0; i < array.length; i++) {
			tab_ids[i] = array[i].id;
		}
		console.log(array);
		chrome.tabs.remove(tab_ids);
	});
}

function buttonClicked2 (tab) {
	chrome.tabs.query({currentWindow: true}, function (array) {
		var tab_ids = new Array(array.length);
		for (var i = 0; i < array.length; i++) {
			tab_ids[i] = array[i].id;
		}
		chrome.tabs.create({index: 0});
		console.log(array);
		chrome.tabs.remove(tab_ids);
	});
}