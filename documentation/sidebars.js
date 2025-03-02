/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
	docs: [
		"intro",
		{
			type: "category",
			label: "Getting Started",
			items: ["getting-started/installation"],
		},
		{
			type: "category",
			label: "Architecture",
			items: ["architecture/tech-stack", "architecture/state-management"],
		},
		{
			type: "category",
			label: "Features",
			items: ["features/price-tracking", "features/search"],
		},
		{
			type: "category",
			label: "Troubleshooting",
			items: ["troubleshooting/common-issues"],
		},
	],
};
