import type { Metadata } from "next";
import "@/styles/globals.css";
import "highlight.js/styles/github-dark.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
		<main className='font-sans flex flex-col items-center px-5 sm:px-12 md:px-24 py-10'>
			<Header />
			<section className='max-w-3xl pb-10'>{children}</section>
			<Footer />
		</main>
	);
}