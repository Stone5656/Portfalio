import '../styles/global.css';
import Layout from '@/compornents/layout';

function Myapp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default Myapp;