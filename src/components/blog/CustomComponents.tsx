import { MDXComponents } from "mdx/types";
import React from "react";

export const overrideMDXComponents: MDXComponents = {
	h1: ({ children }) => <h1 className='text-3xl font-bold my-4'>{children}</h1>,
	h2: ({ children }) => <h2 className='text-2xl font-bold my-3'>{children}</h2>,
	p: ({ children }) => (
		<p className='text-lg font-serif text-justify'>{children}</p>
	),
	ul: ({ children }) => (
		<ul className='text-lg font-serif list-disc'>{children}</ul>
	),
	li: ({ children }) => <li className='text-lg font-serif ml-7'>{children}</li>,
};
