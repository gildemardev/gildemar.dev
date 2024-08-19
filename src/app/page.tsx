"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Paragraph from "@/typhography/Paragraph";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";

import AnimatedElementRight from "@/components/AnimatedElementRight";
import AnimatedElementLeft from "@/components/AnimatedElementLeft";

export default function Home() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });

	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 1],
		["#141414", "#000000"]
	);

	return (
		<>
			<div className='fixed right-24'>
				<AnimatedElementRight />
			</div>
			<div className='fixed -top-10'>
				<AnimatedElementLeft />
			</div>
			<motion.main
				ref={ref}
				style={{ backgroundColor }}
				className='flex flex-col items-center px-5 sm:px-12 md:px-24 py-10'>
				<Header />
				<section className='max-w-3xl pb-10'>
					<Paragraph>
						Softwares são mais do que programas ou sites, eles são experiências
						que se entrelaçam com o cotidiano dos usuários. Assim como um
						inquilino aprecia os detalhes de seu lar alugado, os usuários
						valorizam as nuances que tornam a interação com o software única.
						Cada clique é uma oportunidade para encantar e engajar, criando um
						vínculo contínuo com o cliente.
					</Paragraph>
					<Paragraph>
						Desde 2017 trabalhei como Social Media, Motion Designer e aprendi
						programação. Participei da transição do formato de marketing para
						algo mais interativo e rápido. Porquê não aplicar isso ao web
						design?
					</Paragraph>
					<Paragraph>
						Com minha experiência trago uma perspectiva única para o
						desenvolvimento web. Micro interações tem o poder necessário para se
						destacar no mercado digital atual. Esses pequenos detalhes fazem com
						que os usuários se sintam valorizados e proporcionam uma sensação de
						fluidez e continuidade na navegação.
					</Paragraph>
					<Paragraph>
						Se você busca transformar seu projeto em algo mais do que um simples
						site, estou aqui para ajudar. Juntos, podemos criar experiências
						digitais que não apenas atendem às expectativas dos usuários, mas as
						superam. Vamos explorar o poder do motion para converter e fidelizar
						seus clientes!
					</Paragraph>
					<BentoGrid />
					<Paragraph id='contact'>
						Quer saber mais ou simplesmente falar comigo? Sinta-se à vontade
						para preencher o formulário abaixo.
					</Paragraph>
				</section>
				<Footer />
			</motion.main>
		</>
	);
}
