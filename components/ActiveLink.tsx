import { CSSProperties, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
    color: '#0070F3',
    textDecoration: 'underline'
}

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();
    // console.log(router);
    return (
        <Link href={href} legacyBehavior>
            <a style={ asPath === href ? style : undefined }>{text}</a>
        </Link>
    )
}
