var	nconf = module.parent.require('nconf'),
	Emoji = {
		mapping: {
			"(Kappa)": "kappa",
			"(BibleThump)": "biblethump",
			"(DansGame)": "dansgame",
			"(FrankerZ)": "frankerz",
			"(MrDestructoid)": "mrdestructoid",
			"(ShibeZ)": "shibez",
			"(BloodTrail)": "bloodtrail",
			"(FailFish)": "failfish",
			"(KAPOW)": "kapow",
			"(Keepo)": "keepo",
			"(PJSalt)": "pjsalt",
			"(SMOrc)": "smorc",
			"(TriHard)": "trihard",
			":)": "smiley1",
			":(": "smiley2",
			":o": "smiley3",
			":z": "smiley4",
			"B)": "smiley5",
			":/": "smiley6",
			";)": "smiley7",
			";p": "smiley8",
			":p": "smiley9",
			"R)": "smiley10",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			"": "smiley9",
			
		}
	};

	Emoji.replaceOutsideOfCode = function (content, pattern, cb) {
		return content.replace(/(^|<\/code>)([^<]*|<(?!code>))*(<code>|$)/g, function (match) {
			return match.replace(pattern, cb);
		});
	};

	Emoji.addEmoji = function (postContent, callback) {
		callback(null, Emoji.replaceOutsideOfCode(postContent,
			/&gt;:\)|\([\w~]+\)|\\[:]?[od]\/|[:;\|bBiIxX8\(\)\]][=\-"^:]?[)>$&|\w\(\)*@#?]?[)>$&|\w\(\)*@#?]/g,
			function (match) {
				match = match.replace('&gt;', '>');
				return Emoji.mapping[match] ? '<img class="nodebb-plugin-emoji-twitch" src="' +
					nconf.get('relative_path') + '/plugins/nodebb-plugin-emoji-twitch/icons/' +
					Emoji.mapping[match] + '.png" title="' + match + '"/>' : match;
			}
		));
	};

module.exports = Emoji;
