import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostLink from "@/components/blog/PostLink";

import { FaceFrownIcon, LinkIcon } from "@heroicons/react/24/solid";

interface PostMetadata {
	id: number;
	title: string;
	date: string;
	author: string;
	image: string;
	slug: string;
}

function getPostMetadata(): PostMetadata[] {
	const postsDirectory = path.join(process.cwd(), "posts");
	let posts: PostMetadata[] = [];

	try {
		if (fs.existsSync(postsDirectory)) {
			const files = fs.readdirSync(postsDirectory);
			posts = files
				.filter((filename) => filename.endsWith(".mdx"))
				.map((filename) => {
					const filePath = path.join(postsDirectory, filename);
					const fileContents = fs.readFileSync(filePath, "utf8");
					const { data } = matter(fileContents);
					return {
						id: data.id,
						title: data.title,
						date: data.date,
						author: data.author,
						image: data.image,
						slug: filename.replace(".mdx", ""),
					};
				});
		}
	} catch (error) {
		console.error("Erro ao ler o diretório de posts:", error);
	}

	return posts;
}

export default function BlogPage() {
	const posts = getPostMetadata();

	return (
		<section className='max-w-3xl w-full pb-10 flex flex-col py-2 sm:py-8'>
			<div className='border-b border-border pb-5'>
				<h1 className='text-4xl sm:text-6xl font-serif tracking-wide leading-tight mb-8 '>
					Inspirações, ideias e códigos.
				</h1>
				<p className='text-lg'>
					Novas postagens sempre que eu tiver um tempo livre... Geralmente em
					finais de semana ou feriados, sempre tentando trazer algo
					interessante!
				</p>
			</div>
			{posts.length > 0 ? (
				<div className='grid grid-cols-2 gap-6'>
					{posts.map((post) => (
						<PostLink post={post} key={post.id} />
					))}
				</div>
			) : (
				<div className='flex flex-col items-center justify-center h-60 text-primary-foreground'>
					<FaceFrownIcon className='size-14' />
					<p className='text-lg text-center mt-3'>
						POSTAGENS EM BREVE!
						<br />
						<a
							href='/'
							className='text-primary-foreground/50 hover:underline inline-flex items-center uppercase text-sm'>
							<LinkIcon className='size-4 mr-1 mb-0.5' />
							Voltar para a home
						</a>
					</p>
				</div>
			)}
		</section>
	);
}
