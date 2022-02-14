const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'display': ['"Libre Baskerville"', 'serif'],
				'book': ['"Futura LT Book"', 'serif'],
				'light': ['"Futura LT Light"', 'serif'],
				'body': ['"Futura LT Regular"', 'sans-serif'],
				},
			container: {
				center: true,
			  },
			colors: {
				primary: "#8ccdb0",
				secondary: "#f95043",
				text:"#191918",
				body:"#dddddd",
			  }
		}
	},
	plugins: [require('daisyui')]
};

module.exports = config;