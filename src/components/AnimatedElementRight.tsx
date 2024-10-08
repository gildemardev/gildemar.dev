import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
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
						duration: 5,
						ease: "easeInOut",
					},
				}}>
				<span className='absolute flex h-[500px] w-[150px] z-10 pointer-events-none select-none '>
					<Image
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
