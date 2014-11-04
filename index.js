var	nconf = module.parent.require('nconf'),
	Emoji = {
		mapping: {
			"(Kappa)": "Kappa",
			"(BibleThump)": "BibleThump",
			"(DansGame)": "DansGame",
			"(FrankerZ)": "FrankerZ",
			"(MrDestructoid)": "MrDestructoid",
			"(ShibeZ)": "ShibeZ",
			"(BloodTrail)": "BloodTrail",
			"(FailFish)": "FailFish",
			"(KAPOW)": "KAPOW",
			"(Keepo)": "Keepo",
			"(PJSalt)": "PJSalt",
			"(SMOrc)": "SMOrc",
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
