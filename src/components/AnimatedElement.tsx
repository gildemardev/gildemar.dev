import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";

const AnimatedElement: FC = () => {
	const { scrollY } = useScroll();
	const [xTransformRange, setXTransformRange] = useState<[number, number]>([
		0, 200,
	]);

	useEffect(() => {
		const mediaQuerySmall = window.matchMedia("(max-width: 767px)");
		const mediaQueryMedium = window.matchMedia(
			"(min-width: 768px) and (max-width: 1023px)"
		);

		const updateRange = () => {
			if (mediaQuerySmall.matches) {
				setXTransformRange([0, 200]);
			} else if (mediaQueryMedium.matches) {
				setXTransformRange([100, 800]);
			} else {
				setXTransformRange([150, 1800]);
			}
		};

		// Inicializa o breakpoint de acordo com a tela
		updateRange();

		// Listeners para observar caso precise dar update
		mediaQuerySmall.addEventListener("change", updateRange);
		mediaQueryMedium.addEventListener("change", updateRange);

		// Remove os listeners quando não são mais necessários
		return () => {
			mediaQuerySmall.removeEventListener("change", updateRange);
			mediaQueryMedium.removeEventListener("change", updateRange);
		};
	}, []);

	const xTransform = useTransform(scrollY, [0, 1000], xTransformRange);

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
