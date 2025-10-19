/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	], theme: {
		extend: {
			colors: {
				mainColor: '#3B82F6',
			}
		},
		maxWidth: {
			'app-container': '1600px',
		},
		screens: {
			tn: "350px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			nlg: "1024px", // represent for normal large from tailwind
			xl: "1200px",
		},
	},
	// plugins: [require("tailwindcss-animate")],
}

