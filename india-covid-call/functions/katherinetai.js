exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
	twiml.play('https://india-covid-call-toolkit-3766-dev.twil.io/katherinetairecording.mp3');
	callback(null, twiml);
};