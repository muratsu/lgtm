var request = require('request'),
    cheerio = require('cheerio');
var url = 'http://www.lgtm.in/g';

request.get({ url: url, headers: { 'User-Agent': 'James Bond' }}, function(err, res, lgtm) {
    $ = cheerio.load(lgtm);
    console.log('\x1B[33mHere is a random LGTM link:\x1B[39m');
    console.log(($('#markdown')).val());
});
