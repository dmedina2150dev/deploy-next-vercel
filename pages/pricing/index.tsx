import Link from 'next/link';
import Image from 'next/image';
import { MainLayout } from '../../components/layouts/MainLayout';


const PricingPage = () => {
    return (
        <MainLayout>
            <h1 className='title'>Pricing Page</h1>

            <h1 className="title">
                Ir a <Link href='/'>Home</Link>
            </h1>
            <p>
                Get started by editing&nbsp;
                <code className="code">pages/pricing/index.jsx</code>
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
        </MainLayout>
    )
}

export default PricingPage