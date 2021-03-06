import Head from "next/head";
import Header from "../components/Header";
import {API_KEY, CONTEXT_KEY} from "../keys"
import dummyResponse from "../dummyResponse"
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

export default function Search({results}) {
// console.log(results);
   const router = useRouter()
   console.log(router);
    return (
        <div>
            <Head>
                <title>{router.query.terms} -Google Search</title>
                <link rel="icon" href="/favicon.ico" />
                
            </Head>

            <Header/>
            {/* search result */}
            <SearchResults results = {results}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const useDummyData = false;

    // pagination
    const startIndex = context.query.start || '0';


    const data = useDummyData ? dummyResponse : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.terms}&start=${startIndex}`)
    .then((response) =>response.json())


    return{
        props:{
            results: data

        }
    }
}