import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";
import Image from "next/image";

export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), "posts");
	const files = fs.readdirSync(postsDirectory);

	return files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));
}

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContent);

	return (
		<section className=''>
			<Image
				src={data.image}
				alt={data.title}
				width={1200}
				height={600}
				className='w-full h-64 object-cover rounded-lg mb-8'
			/>
			<h1 className='text-4xl font-bold mb-4 '>{data.title}</h1>
			<div className='mb-8'>
				<p>Por {data.author}</p>
				<p>{data.date}</p>
			</div>
			<div>
				<MDXRemote
					source={content}
					options={{
						mdxOptions: {
							rehypePlugins: [rehypeHighlight],
						},
					}}
				/>
			</div>
			{/* Espaço reservado para comentários futuros */}
			<div className='mt-12'>
				<h2 className='text-2xl font-semibold mb-4'>Comentários</h2>
				<p>Os comentários serão implementados em breve.</p>
			</div>
		</section>
	);
}
