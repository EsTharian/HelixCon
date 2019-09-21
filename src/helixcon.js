class Helixcon {
	constructor(options) {
		this.options = {
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
}