var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var twitterAccounts = [
	'CNBCTV18Live',
	'moneycontrolcom',
	'ETNOWlive'
];

for (var i = 0; i < twitterAccounts.length; i++) {
	var params = {
    	q: 'from:' + twitterAccounts[i], 
    	count: 5, result_type: 'recent'
	};

	function gotData(err, data, response) {
	    var tweets = data.statuses;
	    for (var j = 0; j < tweets.length; j++) {
	    	console.log(twitterAccounts[i] + '::');
	        console.log(tweets[j].text + '\n');
	    }
	}

	T.get('search/tweets', params, gotData);

}
