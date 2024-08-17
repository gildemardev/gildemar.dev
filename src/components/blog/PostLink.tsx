import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PostMetadata {
	id: number;
	title: string;
	date: string;
	author: string;
	image: string;
	slug: string;
}

interface PostLinkProps {
	post: PostMetadata;
}

const PostLink: FC<PostLinkProps> = ({ post }) => {
	return (
		<Link href={`/blog/${post.slug}`} key={post.id} className='block'>
			<div className='border border-zinc-500 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'>
				<Image
					src={post.image}
					alt={post.title}
					width={400}
					height={200}
					className='w-full h-48 object-cover'
				/>
				<div className='p-4'>
					<h2 className='text-xl font-semibold truncate mb-2'>{post.title}</h2>
					<p>{post.author}</p>
					<p className='text-sm'>{post.date}</p>
				</div>
			</div>
		</Link>
	);
};

export default PostLink;
