/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				about: "linear-gradient(to bottom, #00000094 0%, #00000094 100%), url('/about-bg.jpg')",
			},
		},
	},
	plugins: [],
};
