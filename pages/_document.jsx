import Document, { Head, Main, NextScript } from 'next/document'

const siteTitle = "Víctor García Rubio - AI/ML Fullstack Software Developer";

export default class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        let props = {...initialProps };
        return props;
    }
    
    render(){
        return(
            <html>
                <Head>
                    <script src="/static/assets/js/google.js"></script>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="og:title" content={siteTitle}/>
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link rel='shortcut icon' type='image/x-icon' href='/static/assets/template/ronaldo/favicon.ico' />
                    <link rel="stylesheet" href="/static/assets/template/ronaldo/css/production.min.css"/>
                    <link rel="stylesheet" href="/static/assets/template/ronaldo/css/style.css"/>
                </Head>
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZLQW73" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}