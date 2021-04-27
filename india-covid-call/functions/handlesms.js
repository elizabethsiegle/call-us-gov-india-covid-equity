
exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.MessagingResponse();
  let ustrGen = '+12023952870'; //'+12023952870';
  let ustrChiefOfStaff = '+12023956850';
  let ustrSouthAsianAffairs = '+12023954720';
  let ustrIntellectualProperty = '+12023954510';
  let ustrNums = [ustrGen, ustrChiefOfStaff, ustrSouthAsianAffairs, ustrIntellectualProperty];
  const client = context.getTwilioClient();
  ustrNums.forEach(number => {
    client.calls.create({
      MachineDetection: "DetectMessageEnd",
      url: 'https://' + context.DOMAIN_NAME + '/katherinetai',
      to: number,
      from: '+12155156567', //twilio num
    }, function(err, result) {
      console.log('New phone call started...');
      console.log(result);
      twiml.message("Called a few phone numbers relating to the office of Katherine Tai, the United States Trade Representative, urging her to support waiving intellectual property rules on COVID vaccines. If no one picked up, we left a message. To contribute to urgent fundraisers supporting folks on the ground in India, check out this list https://docs.google.com/document/u/0/d/1eiobgyrl8iz-R1Dz7c4R5pzzzkuZLBj99vaC7T_UeVo/mobilebasic");
      return callback(null, twiml);
    });
  });
};
