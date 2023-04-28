import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * ? Estos son los tipados para contenido de react o JSX
 * * ReactElement
 * * JSX.Element
 * * ReactNode
 * 
 * ? NextPage es el tipado para las paginas o pages de Next
 */
type NextPageWithLayout = NextPage & {
  /**
   * 
   * @param page Pagina que retorna cuando no existe esta funcion getLayout en la page
   * @returns Funcion con un elemento JSX o la Page
   */
  getLayout?: ( page: ReactElement ) => JSX.Element | ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  /**
   * ! Aqui se ejecutara la funcion del Layout
   * * Revisa la funcion (Component)
   * * Si exite la funcion que creamos en este casi getLayout la retorna si no retorna la pagina.
   */
  const getLayout = Component.getLayout || ((page) => page);

  //? Respuesta anterior
  // return <Component {...pageProps} />

  //? Respuesta nueva con la modificacion del getLayout
  return getLayout( <Component {...pageProps} /> );
}
