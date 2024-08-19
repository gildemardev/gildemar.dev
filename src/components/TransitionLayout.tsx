"use client";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface TransitionLayoutProps {
	children: React.ReactNode;
}

const TransitionLayout: FC<TransitionLayoutProps> = ({ children }) => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode='wait'>
			<motion.div key={pathname} className='relative w-full'>
				{children}
				<motion.div
					className='fixed inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50 pointer-events-none backdrop-blur-sm'
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 1 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
				/>
				<motion.div
					className='fixed inset-0 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 origin-right z-50 pointer-events-none backdrop-blur-sm'
					initial={{ scaleX: 1 }}
					animate={{ scaleX: 0 }}
					exit={{ scaleX: 0 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default TransitionLayout;
