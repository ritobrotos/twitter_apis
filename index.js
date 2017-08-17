var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
    q: 'market', count: 2
};

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }

}

T.get('search/tweets', params, gotData);
