import Document, { Head, Main, NextScript } from 'next/document'
import ReactGA from 'react-ga';

var trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID; // Replace with your Google Analytics tracking ID
trackingId = 'UA-176429750-1';


export default class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        let props = {...initialProps };
        return props;
    } 
    render(){
        return(
            <html lang="en">
                <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176429750-1" />
                    <script
                        dangerouslySetInnerHTML={{
                        __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-176429750-1');
                            `,
                        }}
                    />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link rel='shortcut icon' type='image/x-icon' href='/static/assets/template/ronaldo/favicon.ico' />
                    <link rel="stylesheet" href="/static/assets/template/ronaldo/css/production.min.css"/>
                    <link rel="stylesheet" href="/static/assets/template/ronaldo/css/style.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}