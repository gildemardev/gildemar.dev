"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<motion.div key={pathname} className='relative w-full'>
				{/* Conteúdo da página */}
				{children}

				{/* Animação de transição */}
				<motion.div
					className='fixed inset-0 cool-background origin-left z-50'
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 1 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
				/>
				<motion.div
					className='fixed inset-0 cool-background origin-right z-50'
					initial={{ scaleX: 1 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				/>
			</motion.div>
		</AnimatePresence>
	);
}
