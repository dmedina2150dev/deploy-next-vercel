import Link from 'next/link';
import Image from 'next/image';

import { MainLayout } from '../components/layouts/MainLayout';


/**
 * TODO EL nombre de la funcion no necesariamente es igual al nombre del archivo
 *
 */
export default function HomaPage() {
	return (
		<MainLayout>
			<h1 className='title'>Homa Page</h1>

			<h1 className="title">
				Ir a <Link href='/about'>About</Link>
			</h1>
			<p>
				Get started by editing&nbsp;
				<code className="code">pages/index.jsx</code>
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

		</ MainLayout>
	)
}
