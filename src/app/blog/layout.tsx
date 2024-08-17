import type { Metadata } from "next";
import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "Blog - GildemarDev",
	description: "Artigos sobre React, Typescript e NextJS.",
};

export default function BlogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='font-sans container max-w-prose mx-auto px-4 py-8 '>
			<Header />
			{children}
		</main>
	);
}
