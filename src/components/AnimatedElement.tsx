import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC } from "react";

interface AnimatedElementProps {}

const AnimatedElement: FC<AnimatedElementProps> = () => {
	const { scrollY } = useScroll();
	// TODO: Responsividade do starter point
	const xTransform = useTransform(scrollY, [0, 1000], [0, 200]);

	return (
		<motion.div
			className={cn("sticky top-0 flex-shrink-0 inline-flex")}
			style={{ x: xTransform }}>
			<motion.div
				className='relative overflow-visible'
				animate={{
					rotate: [-5, 5],
					transition: {
						repeat: Infinity,
						repeatType: "mirror",
						duration: 3,
						ease: "easeInOut",
					},
				}}>
				{/* Modifica o tamanho nesse Span com o size */}
				<span className='absolute flex items-center justify-center z-10 pointer-events-none select-none size-24'>
					{/* TODO: Integrar nextImage e tirar o alt de alguma forma impossibilitar de ser lido*/}
					<img
						src='/burro.png'
						alt='Holofote'
						className='w-full h-full object-contain'
					/>
				</span>
			</motion.div>
		</motion.div>
	);
};

export default AnimatedElement;
