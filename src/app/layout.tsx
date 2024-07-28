import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

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
					"antialiased selection:bg-[#00ffea] selection:text-black bg-background text-foreground ",
					bitter.variable,
					inter.variable
				)}>
				{children}
			</body>
		</html>
	);
}
