import Head from 'next/head';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>Bendita Clínica Estética</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}