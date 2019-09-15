class Helixcon {
	constructor(options) {
		const option = {
			chat: {
				whatsapp: {},
				skype: {},
				messenger: {},
				telegram: {},
				contact: {},
				helixchat: {}
			},
			social: {
				facebook: {},
				twitter: {},
				instagram: {},
				youtube: {},
				github: {},
				linkedin: {},
				behance: {},
				codepen: {},
				dribbble: {}
			},
			theme: "dark" | "light" | "retro" | "terminal" | { "customTheme":{} }
		}
		Object.assign(this, options)
	}

	whatsapp() {

	}
}