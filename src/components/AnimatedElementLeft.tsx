import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

const AnimatedElementLeft: FC = () => {
	return (
		<motion.div className={cn("sticky flex-shrink-0 inline-flex")} style={{}}>
			<motion.div
				className='relative overflow-visible'
				animate={{
					rotate: [5, 0],
					transition: {
						repeat: Infinity,
						repeatType: "mirror",
						duration: 3,
						ease: "easeInOut",
					},
				}}>
				{/* Modifica o tamanho nesse Span com o size */}
				<span className='absolute flex h-[200px] w-[200px] z-10 pointer-events-none select-none '>
					{/* TODO: Integrar nextImage e tirar o alt de alguma forma impossibilitar de ser lido*/}
					<img
						src='/image2.png'
						height={500}
						width={500}
						alt='Holofote'
						className='w-full h-full'
					/>
				</span>
			</motion.div>
		</motion.div>
	);
};

export default AnimatedElementLeft;
