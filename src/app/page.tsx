import Paragraph from "@/typhography/Paragraph";

export default function Home() {
	const sideProjects = [
		"Um CRM para marketing direto.",
		"Um sistema de cardápio online e gerenciamento de atendimentos.",
		"Uma ferramenta de IA que pode assessorar diretamente seu atendimento e suas vendas.",
	];

	return (
		// TODO: Atualizar as cores para css variables
		<main className='flex min-h-screen flex-col items-center px-24 py-10 bg-blue-800 text-blue-100'>
			<section className='max-w-3xl'>
				{/* TODO: Enfatizar algumas frases com a tag strong */}
				<Paragraph>Motion Designer & Fullstack Developer.</Paragraph>
				<Paragraph>
					Especializado em micro interações, posso agregar no seu projeto.
					Vivemos em uma geração onde a atenção do usuário é capturada nos
					primeiros segundos de acesso . Ação e movimento resumem tudo!
				</Paragraph>
				<Paragraph>
					Softwares são mais do que meros programas ou sites; eles são
					experiências que se entrelaçam com o cotidiano dos usuários. Assim
					como um inquilino aprecia os pequenos detalhes de seu lar alugado, os
					usuários valorizam as nuances que tornam a interação com o software
					única. Cada clique, deslize ou toque é uma oportunidade para encantar
					e engajar, criando um vínculo contínuo entre o cliente e o serviço.
				</Paragraph>
				<Paragraph>
					Desde 2017, trabalhei inicialmente como social media e motion designer
					e iniciei também na programação. Participei da transição de posts em
					formato de imagem, sem movimento, para os vídeos curtos que dispararam
					em popularidade no marketing. Porquê não aplicar isso ao web design?
				</Paragraph>
				<Paragraph>
					Com minha experiência trago uma perspectiva única para o
					desenvolvimento de interfaces. Micro interações não são apenas uma
					tendência, mas uma necessidade para se destacar no mercado digital
					atual. Esses pequenos detalhes fazem com que os usuários se sintam
					valorizados e proporcionam uma sensação de fluidez e continuidade na
					navegação.
				</Paragraph>
				<Paragraph>
					Se você busca transformar seu projeto em algo mais do que um simples
					site, estou aqui para ajudar. Juntos, podemos criar experiências
					digitais que não apenas atendem às expectativas dos usuários, mas as
					superam. Vamos explorar o poder do motion para converter e fidelizar
					seus clientes.
				</Paragraph>
				<Paragraph>Atualmente estou trabalhando em 3 side projects:</Paragraph>
				<ul className='text-lg space-y-2 mt-2'>
					{sideProjects.map((sideProject, index) => {
						return <li key={index}>{`=> ${sideProject}`}</li>;
					})}
				</ul>
				<Paragraph>
					Quer saber mais ou simplesmente falar comigo? Sinta-se à vontade para
					preencher o formulário abaixo.
				</Paragraph>
			</section>
		</main>
	);
}
