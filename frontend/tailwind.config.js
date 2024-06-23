/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
            colors: {
                'primary': '#4A30DD',
                'secondary': '#36C9AD',
                'dark-purple': '#1A0826',
            },
        }, 
	}, 
	plugins: [], 
}