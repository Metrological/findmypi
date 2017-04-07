var dgram = require('dgram');
var st = 'urn:metrological-com:service:webbridge:1';
var mSearchRequester = dgram.createSocket({ type: 'udp4', reuseAddr: true });
var message =
    "M-SEARCH * HTTP/1.1\r\n"+
    "ST:"+st+"\r\n"+
    "Content-Length:1\r\n\r\n"+
    "0\r\n\r\n";

mSearchRequester.on('message', function (mes,res) {
    console.log('found pi: ' + res.address);
});
mSearchRequester.on('listening', function () {
    mSearchRequester.send(new Buffer(message, "ascii"), 0, message.length, 1900, '239.255.255.250', function (err,res) {
    });
});

mSearchRequester.bind(1900, '0.0.0.0');
setTimeout(function(){
    mSearchRequester.close();
    process.exit();
}, 2000);
