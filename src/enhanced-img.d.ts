// `@sveltejs/enhanced-img` only ships an ambient type for the `*?enhanced` query.
declare module '*?enhanced&imgWidth=880&format=webp;jpg' {
	const value: import('vite-imagetools').Picture
	export default value
}
