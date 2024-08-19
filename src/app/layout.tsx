import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import TransitionLayout from "@/components/TransitionLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bitter = Bitter({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
	title: "Portfolio - GildemarDev",
	description: "Webdesigner especializado em micro interações.",
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
					"antialiased selection:bg-[#00ffea] selection:text-black bg-background text-foreground overflow-x-hidden min-h-screen",
					bitter.variable,
					inter.variable
				)}>
				<TransitionLayout>{children}</TransitionLayout>
			</body>
		</html>
	);
}
