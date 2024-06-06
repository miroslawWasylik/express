const path = require('path');

function getMessages(req, res) {	
	res.sendFile(path.join(__dirname, '..', 'public', 'images', '3551739.jpg'));
	// res.send('<ul><li>Helloo Albert!</ul></li>');
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

module.exports = {
	getMessages,
	postMessage
};