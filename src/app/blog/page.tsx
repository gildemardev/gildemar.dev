import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PostLink from "@/components/blog/postLink";

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
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8'>Blog Posts</h1>
			{posts.length > 0 ? (
				<div className='grid grid-cols-2 gap-6'>
					{posts.map((post) => (
						<PostLink post={post} key={post.id} />
					))}
				</div>
			) : (
				<p className=''>
					Nenhum post encontrado. Adicione arquivos MDX ao diretório
					&apos;posts&apos;.
				</p>
			)}
		</div>
	);
}
