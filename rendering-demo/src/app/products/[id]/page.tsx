export const dynamicParams = false;

// The generateStaticParams function is inbuilt function in next.js to generate static params for a page.
export async function generateStaticParams(){
    return [{id: "1"}, {id: "2"}, {id: "3"}];
}

export default async function ProductPage({params}:{params: Promise<{id: string}>}){

    const {id} = await params;
    return(
        <h1>
            Product {id} details related at {new Date().toLocaleTimeString()}
        </h1>
    )
}