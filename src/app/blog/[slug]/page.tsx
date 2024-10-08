import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";
import Image from "next/image";
import { overrideMDXComponents } from "@/components/blog/CustomComponents";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), "posts");
	if (!fs.existsSync(postsDirectory)) {
		return []; // Caso não tenha posts retorna vazio
	}
	const files = fs.readdirSync(postsDirectory);

	return files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));
}

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);

	// Verifica se o arquivo da slug existe
	if (!fs.existsSync(filePath)) {
		return notFound();
	}

	const fileContent = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContent);

	return (
		<article>
			<Image
				src={data.image}
				alt={data.title}
				width={1200}
				height={600}
				className='w-full h-96 object-cover rounded-lg mb-8'
			/>
			<h1 className='text-4xl font-bold mb-4 '>{data.title}</h1>
			<div className='mb-8'>
				<p>Por {data.author}</p>
				<p>{data.date}</p>
			</div>
			<div>
				<MDXRemote
					source={content}
					components={overrideMDXComponents}
					options={{
						mdxOptions: {
							rehypePlugins: [rehypeHighlight],
						},
					}}
				/>
			</div>
			<div className='mt-12'>
				<h2 className='text-2xl font-semibold mb-4'>Comentários</h2>
				<p>Os comentários serão implementados em breve.</p>
			</div>
		</article>
	);
}
