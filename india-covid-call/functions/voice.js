exports.handler = function(context, event, callback) {
	let msg = `Dear Ambassador Katherine Tai,
 
I’m calling from ${event.FromCity}, ${event.FromState}. I am horrified by the terrible COVID-19 surge in India and its broader implications for ending the pandemic. I am heartened by the Biden administration’s actions, but these actions need to go further. 
 
As your office’s mission states, the goal of US trade policy is to “create new opportunities and higher living standards for families, farmers, manufacturers, workers, consumers, and businesses.” 
 
The present situation, with export restrictions on vaccines and vaccine intellectual property rules runs entirely counter to this mission. If we do not rapidly vaccinate the entire planet, hundreds of millions of people will suffer and new vaccine-resistant variants will likely emerge. This will impact people’s lives and the economies of many countries, including our own. 
 
As you yourself said last week, the gaping divide between developed and developing countries' access to medicines, seen previously during the AIDS crisis, is "completely unacceptable".
 
I am calling on you to urge President Biden to waive intellectual property rules so that COVID-19 vaccines can be manufactured generically worldwide. This is the only way to end the pandemic, and ensure a bright, prosperous future for us all. 
 
India has done its part in the global fight against COVID-19 by being a producer of much of the world’s vaccines. Now, we must do our part. 
 
Thank you.
`
	let twiml = new Twilio.twiml.VoiceResponse();
	twiml.say(msg);
	callback(null, twiml);
};