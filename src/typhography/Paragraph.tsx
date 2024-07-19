import { cn } from "@/lib/utils";
import React from "react";

interface ParagraphProps extends React.ComponentPropsWithoutRef<"p"> {
	children: React.ReactNode;
}

const Paragraph = ({ children, className = "", ...props }: ParagraphProps) => {
	return (
		<p
			className={cn(
				"leading-7 mt-6 first:mt-0 text-lg text-justify font-serif",
				className
			)}
			{...props}>
			{children}
		</p>
	);
};

export default Paragraph;
