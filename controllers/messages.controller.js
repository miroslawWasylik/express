function getMessages(req, res) {
	res.send('<ul><li>Helloo Albert!</ul></li>');
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

module.exports = {
	getMessages,
	postMessage
};