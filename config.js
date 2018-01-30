var api = 'http://explorer.brazukcoin.org:44043';
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'BZK';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "bzk": [
		["pool.brazukcoin.org", "http://pool.brazukcoin.org:8117"],
		["pool.brazukcoin.space", "http://pool.brazukcoin.space:8117"]
//		["krb.dreampool.info", "https://krb.dreampool.info/api"]
		
    ]
};

//var networkStat2 = {
//    "krb": [
//		["karbowanec.hashvault.pro", "https://karbowanec.hashvault.pro/api"]
//		]
//};
