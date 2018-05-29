module.exports = {
	"extends": "standard",
	"rules": {
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],
		"no-tabs": "off",
		"no-multiple-empty-lines": "off",
		"no-trailing-spaces": [
			"error",
			{
				"skipBlankLines": true
			}
		],
		"prefer-arrow-callback": "error",
		"no-multi-spaces": "off",
		"key-spacing": [
			"error",
			{
				"beforeColon": false,
				"afterColon": true,
				"mode": "minimum"
			}
		],
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"padded-blocks": "off",
		"no-return-assign": "off"
	}
}
