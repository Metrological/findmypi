var dial = require('dial'),
	url = require('url');

dial.on('device', function (device) {
	if (device.name === 'WPE DIAL')
		console.log('rpi found: ' + url.parse(device.location).hostname);
});

dial.discover();
