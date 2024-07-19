import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className='flex flex-col w-full max-w-3xl font-sans tracking-tight'>
			{/* TODO: Aplicar variaveis de cor */}
			<hr className='text-white h-1 w-full py-2.5' />
			<p>
				2024. Feito por{" "}
				<strong>
					<a
						className='hover:underline hover:text-orange-500 transition-colors'
						href='https://www.gildemar.dev'>
						@gildemar.dev
					</a>
				</strong>
				, 🧱 por 🧱.
			</p>
		</footer>
	);
};

export default Footer;
