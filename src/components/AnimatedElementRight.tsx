import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

const AnimatedElementRight: FC = () => {
	return (
		<motion.div
			className={cn("sticky top-0 flex-shrink-0 inline-flex")}
			style={{}}>
			<motion.div
				className='relative overflow-visible'
				animate={{
					rotate: [-5, 5],
					transition: {
						repeat: Infinity,
						repeatType: "mirror",
						duration: 10,
						ease: "easeInOut",
					},
				}}>
				{/* Modifica o tamanho nesse Span com o size */}
				<span className='absolute flex h-[500px] w-[150px] z-10 pointer-events-none select-none '>
					{/* TODO: Integrar nextImage e tirar o alt de alguma forma impossibilitar de ser lido*/}
					<img
						src='/image.png'
						height={425}
						width={150}
						alt='Holofote'
						className='w-full h-full object-contain'
					/>
				</span>
			</motion.div>
		</motion.div>
	);
};

export default AnimatedElementRight;
