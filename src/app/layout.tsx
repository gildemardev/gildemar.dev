import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bitter = Bitter({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
	title: "Portfolio - GildemarDev",
	description:
		"Webdesigner especializado em micro interações. Entre em contato em gil@gildemar.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br' className='scroll-smooth'>
			<body
				className={cn(
					"antialiased selection:bg-[#00ffea] selection:text-black flex min-h-screen flex-col items-center px-5 sm:px-12 md:px-24 py-10 bg-background text-foreground ",
					bitter.variable,
					inter.variable
				)}>
				<Header />
				{children}
			</body>
		</html>
	);
}
