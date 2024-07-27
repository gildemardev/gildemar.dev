import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
	return (
		<nav className='max-w-3xl w-full pb-8 flex justify-between uppercase'>
			<h1 className='font-sans text-xl font-bold tracking-tighter'>Gildemar</h1>
			<ul className='inline-flex items-center gap-4 font-sans'>
				<li className='hover:underline cursor-pointer'>
					<Link href={"/"}>Home</Link>
				</li>
				<li className='hover:underline cursor-pointer'>
					<Link href={"/blog"}>Blog</Link>
				</li>
				<li className='hover:underline cursor-pointer'>
					<a href='#projects'>Projetos</a>
				</li>
				<li className='hover:underline cursor-pointer'>
					<a href='#contact'>Contato</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
