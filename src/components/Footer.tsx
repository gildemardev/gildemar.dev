import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className='flex flex-col w-full max-w-3xl font-sans tracking-tight'>
			<hr className='border-border h-1 w-full py-2.5' />
			<p>
				2024. Feito por{" "}
				<strong>
					<a className='hover:underline' href='https://www.gildemar.dev'>
						@gildemar.dev
					</a>
				</strong>
				, 🧱 por 🧱.
			</p>
		</footer>
	);
};

export default Footer;
