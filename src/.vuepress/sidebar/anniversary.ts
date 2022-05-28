import { arraySidebar } from "vuepress-theme-hope";

export const anniversary = arraySidebar([
  "",
  {
	text: "2021",
	icon: "autumn",
	prefix: "2021",
	collapsable: true,
	children: [
		"",
		{
			text: "1月",
			icon: "autumn",
			prefix: "1m",
			collapsable: true,
			children: [
				"",
				"13",
			],
		}
	],
  }
]);

