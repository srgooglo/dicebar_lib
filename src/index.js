const React = require("react")

const generate = function (payload = {}, params) {
	const origin = "https://avatars.dicebear.com/api"
	let uri = `${origin}/${payload.type}/${payload.seed}.svg`

	if (typeof params === "object" && !Array.isArray(params)) {
		const keys = Object.keys(params)
		if (keys.length > 0) {
			this.uri += `?${keys.map((key) => `${key}=${params[key]}`).join("&")}`
		}
	}

	return {
		uri,
		renderImg: function () {
			return React.createElement("img", { src: this.uri })
		},
	}
}

const generateRandom = (payload = {}, params) => {
	const randomSeed = () => Math.random().toString(36).substring(7)

	return generate({ type: payload.type ?? "micah", seed: payload.seed ?? randomSeed() }, params)
}

module.exports = { generate, generateRandom }

