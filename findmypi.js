var dial = require('dial'),
	url = require('url');

dial.on('device', function (device) {
	if (new RegExp('wpe|webbridge', 'i').test(device.name))
		console.log('found: ' + url.parse(device.location).hostname);
});

dial.discover();
