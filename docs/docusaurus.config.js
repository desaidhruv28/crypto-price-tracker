const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
	title: "Crypto Price Snap",
	tagline: "Real-time cryptocurrency price tracking",
	url: "https://your-docusaurus-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "your-github-username",
	projectName: "crypto-price-snap",

	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/your-github-username/crypto-price-snap/tree/main/documentation/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	themeConfig: {
		navbar: {
			title: "Crypto Price Snap",
			items: [
				{
					type: "doc",
					docId: "intro",
					position: "left",
					label: "Docs",
				},
				{
					href: "https://github.com/your-github-username/crypto-price-snap",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Getting Started",
							to: "/docs/getting-started/installation",
						},
						{
							label: "Features",
							to: "/docs/features/price-tracking",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/your-github-username/crypto-price-snap",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Crypto Price Snap. Built with Docusaurus.`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
};
