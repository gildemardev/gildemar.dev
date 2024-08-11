import { FC } from "react";

interface BentoGridProps {}

const BentoGrid: FC<BentoGridProps> = ({}) => {
	return (
		<article id='projects' className='font-serif text-lg mt-6'>
			<h3 className='mb-5'>
				Um pouco do que posso fazer:{" "}
				<span className='text-zinc-400'>(Animações em produção)</span>
			</h3>

			<div className='flex h-full w-full items-center justify-center'>
				<div className='grid h-full w-full gap-4 grid-cols-2 md:grid-cols-4 sm:grid-rows-2 md:grid-rows-4 rounded-lg shadow-md'>
					<div className='p-10 col-span-2 row-span-2 bg-[#4960D7] rounded-lg shadow-md flex items-center justify-center'>
						<div className='aspect-square md:aspect-auto flex justify-center items-center'>
							<p className='text-center '>MOTION DESIGN</p>
						</div>
					</div>

					<div className='p-10 aspect-square col-span-1 row-span-2 bg-[#d43f00] rounded-lg shadow-md flex items-center justify-center'>
						<p className='text-center'>ÍCONES PERSONALIZADOS</p>
					</div>

					<div className='p-10 aspect-square col-span-1 row-span-2 bg-[#FCDA7F] text-black rounded-lg shadow-md flex items-center justify-center'>
						<p>PROJETO 1</p>
					</div>

					<div className='p-10 col-span-1 aspect-square row-span-2 bg-red-200 rounded-lg shadow-md flex items-center justify-center'>
						<p>PUBLICIDADE</p>
					</div>

					<div className='p-10 aspect-square col-span-1 row-span-2 bg-[#F00816] rounded-lg shadow-md flex items-center justify-center'>
						<p className='text-center'>LOGOS ANIMADOS</p>
					</div>

					<div className='p-10  aspect-video sm:aspect-auto col-span-2 row-span-2 bg-[#1ED760] rounded-lg shadow-md flex items-center justify-center'>
						<p>PROJETO 2</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default BentoGrid;
