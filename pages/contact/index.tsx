import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';


/**
 * TODO EL nombre de la funcion no necesariamente es igual al nombre del archivo
 *
 */
export default function ContactPage() {
	return (
		<MainLayout>

			<h1>Contact Page</h1>
			{/* TODO: Podemos poner los estilos de esta forma seria pre-procesado por Next cuando usamos (SSG) Serve Site Static Generation. */}
			{/* <div className={'description'}> */}
			{/* TODO: O de esta forma para SSG es lo mismo */}
				<h1 className="title">
					Ir a <Link href='/'>Home</Link>
				</h1>
				<p>
					Get started by editing&nbsp;
					<code className="code">pages/contact.jsx</code>
				</p>
			{/* </div> */}

			<div className="center">
				<Image
					className="logo"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>
		</ MainLayout>
	)
}
