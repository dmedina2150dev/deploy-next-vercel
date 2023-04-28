import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';


/**
 * TODO EL nombre de la funcion no necesariamente es igual al nombre del archivo
 *
 * TODO: ESTA SERIA UNA FORMA DE ANIDAR LAYOUT
 */
/*export default function AboutPage() {
	return (
		<MainLayout>
			<DarkLayout>
				<h1>About Page</h1>

				<h1 className="title">
					Ir a <Link href='/'>Home</Link>
				</h1>
				<p>
					Get started by editing&nbsp;
					<code className="code">pages/about.jsx</code>
				</p>

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
			</DarkLayout>
		</ MainLayout>
	)
}*/

/**
 * TODO: ESTA ES LA OTRA FORMA DE ANIDAR EL LAYOUT
 * INCLUYENDO LA FUNCION QUE ESTA AL FINAL DEL ARCHIVO
 * 
 * SE ELIMINA EL SEGUNDO LAYOUT O EL MAS INTERNO
 * Y SE REEMPLAZA EL PRINCIPAL POR UN FRAGMENTO QUE DEVUELVA LA FUNCION (getLayout)
 * 
 * 
 * 
 */
export default function AboutPage() {
	return (
		<>
				<h1>About Page</h1>

				<h1 className="title">
					Ir a <Link href='/'>Home</Link>
				</h1>
				<p>
					Get started by editing&nbsp;
					<code className="code">pages/about.jsx</code>
				</p>

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
		</>
	)
}

/** 
 * TODO: Forma de anidar Layouts de forma mas simple
 * ! Esta funcion se tiene que mandar a ejecutar. Y se puede hacer en (_app.js)
*/
AboutPage.getLayout = function getLayout ( page: JSX.Element ) {
	return (
		<MainLayout>
			<DarkLayout>
				{ page }
			</DarkLayout>
		</MainLayout>
	)
}