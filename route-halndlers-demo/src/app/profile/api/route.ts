import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export const GET = async (req: NextRequest)=>{
    // Get headers from the Next.js Feature 
    const headersList = await headers();
    console.log(headersList.get("Authorization"))

    // Get headers from the Request object (Traditional way)
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders.get("Authorization"))

    
    const cookie = req.cookies.get("theme")
    console.log(cookie)


    // Set cookies from Next.js Feature
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", '20')
    console.log(cookieStore.get("resultsPerPage"))
    // alse we have cookie.has() and cookie.delete() methods to check if a cookie exists and delete it

    return new Response("<h1>Profile API data</h1>", {
        headers: {
            'content-type': 'text/html',
            'set-cookie': 'theme=dark', // Set cookie from the Response object
        }
    })
}