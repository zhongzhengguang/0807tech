import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/src/components/Header";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="IKEA宜家家居-辦公與商用家具租賃-規劃舒適工作環境和商業空間"
                />
                <meta
                    name="description"
                    content="提供具設計感、高品質的辦公/商用家具出租，透過循環利用降低碳足跡和廢棄物。面對環境不確定性，以租代買保持資產輕盈且金流更彈性，免除一次性大額開銷與家具管理煩惱。使用IKEA租賃不只獲得家具，同時享有運送組裝、維修替換、定期盤點、到期移除等服務，另可付費提供專業家具清潔保養。"
                />
                <meta
                    property="og:description"
                    content="提供具設計感、高品質的辦公/商用家具出租，透過循環利用降低碳足跡和廢棄物。面對環境不確定性，以租代買保持資產輕盈且金流更彈性，免除一次性大額開銷與家具管理煩惱。使用IKEA租賃不只獲得家具，同時享有運送組裝、維修替換、定期盤點、到期移除等服務，另可付費提供專業家具清潔保養。"
                />
                <meta
                    property="og:url"
                    content="https://ikea-rent.kiitzu.ninja/leasing"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
